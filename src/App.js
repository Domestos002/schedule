import data from './data.json'
import schedule from './components/schedule/schedule.vue'
import { capitalize } from 'lodash'

export default {
    name: 'app',
    data() {
        return {
            inputData: data.Object,
            locale: '',
        }
    },

    mounted() {
        this.setLocale('ru')
    },

    components: {
        schedule: schedule
    },
    computed: {
        data: function() {
            return this.locale === 'ru' ? this.parseDate('ru') : this.parseDate('en')
        }
    },
    methods: {
        parseDate: function (target) {
            const days = this.inputData.ScheduleDays;
            const isDefault = target === 'ru';
            let resultDays = [];
            Object.keys(days).map((key) => {
                let result = {};
                const locations = days[key].ScheduleLocations;
                result.Locations = locations.map(loc => {
                    let events = loc.EventSessions;
                    events = events.map(ev => {
                        let reports = ev.EventSessionItems;
                        let moderators = ev.EventSessionModerators;

                        reports = reports.map(rep => {
                            return {
                                Caption: rep.Caption,
                                VideoUrl: this.getFieldValue(target, rep, 'VideoUrl'),
                                SpeakerCaption: rep.Speaker.Caption,
                                CountryName: rep.Speaker.CountryName,
                                CountryId: rep.Speaker.CountryId,
                                Duration: rep.Duration,
                                Id: rep.Speaker.Id,
                                ComponentId: rep.Speaker.ComponentId,
                                DefaultImageId: rep.Speaker.DefaultImageId,
                            }
                        });

                        moderators = moderators.map(moder => {
                            return {
                                Caption: moder.Person.Caption,
                                ComponentId: moder.Person.ComponentId,
                                Id: moder.Id,
                                DefaultImageId: moder.Person.DefaultImageId,
                            }
                        });

                        return {
                            Caption: this.getFieldValue(target, ev, 'Caption'),
                            Reports: reports,
                            Description: ev.Description,
                            Id: ev.Id,
                            Moderators: moderators,
                            TimePeriod: ev.TimePeriod,
                        }
                    });
                    return {
                        Caption: capitalize(this.getFieldValue(target, loc, 'Caption')),
                        Id: loc.Id,
                        Events: events,
                    }
                });
                result.Caption = this.getFieldValue(target, days[key], 'Caption');
                resultDays.push(result);
            });

            return resultDays;
        },
        getFieldValue: function(target, object, field){
            const isDefault = target === 'ru';
            if(isDefault) {
                return object[field]
            }

            if(object.ObjectDataVersionList) {
                const versionField = object.ObjectDataVersionList.find(el => el.ObjectFieldName === field);
                return  versionField ? versionField.Value : 'not found';
            } else {
                return 'not found'
            }
        },
        toggleLocale: function() {
            this.locale === 'ru' ? this.setLocale('en') : this.setLocale('ru');
        },

        setLocale: function(loc) {
            this.locale = loc;
            this.$i18n.locale = loc
        }
    }
}
