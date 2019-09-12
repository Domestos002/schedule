<template>
    <div class="schedule">
        <div class="schedule__inner">
            <div class="schedule__tab-list">
                <span class="schedule__tab"
                      :key="day.Id" v-for="(day, index) in days"
                      :class="{ 'schedule__tab--active': tabs[index]}"
                      @click="setTab(index)">
                    {{ day.Caption }}
                </span>
            </div>
            <div :key="day.Id" v-for="(day, index) in days"
                 :class="{ 'schedule__content--active': tabs[index]}"
                 class="schedule__content">
                <div class="schedule__day-header">{{ day.Caption }}</div>
                <div class="schedule__list">
                    <div class="schedule__item" :key="location.Id" v-for="location in day.Locations">
                        <div class="schedule__location-caption"
                             v-b-toggle="'schedule' + location.Id">
                            {{ location.Caption }}
                            <span class="caret"></span>
                        </div>
                        <b-collapse class="schedule__location-list" :id="'schedule' + location.Id">
                            <div class="schedule__location-item schedule-event" :key="event.Id" v-for="event in location.Events">
                                    <span class="schedule-event__time">{{ event.TimePeriod }}</span>
                                    <div class="schedule-event__session">
                                        <div class="schedule-event__header" v-b-toggle="'event' + event.Id">
                                            <p class="schedule-event__title">
                                                {{ event.Caption }}
                                                <span class="caret" v-if="event.Moderators.length > 0"></span>
                                            </p>
                                            <div class="schedule-event__description" v-if="event.Description">
                                                {{ event.Description }}
                                            </div>

                                        </div>
                                        <b-collapse class="schedule-event__more" :id="event.Moderators.length > 0 ? 'event' + event.Id : ''">
                                            <div class="schedule-event__moderator" v-if="event.Moderators.length > 0">
                                                <p class="schedule-event__moderator-title">
                                                    {{ $t('moders') }}: </p>
                                                <div class="schedule-event__moderator-list">
                                                    <div class="schedule-event__moderator-item" :key="moder.Id" v-for="moder in event.Moderators">
                                                        {{ moder.Caption}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="schedule-event__report">
                                                <div class="schedule-event__report-list">
                                                    <report class="schedule-event__report-item"
                                                            :key="report.Id" v-for="report in event.Reports"
                                                            :data="report"
                                                    ></report>
                                                </div>
                                            </div>
                                        </b-collapse>
                                    </div>
                                </div>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="schedule__tab-list">
                <span class="schedule__tab"
                      :key="day.Id" v-for="(day, index) in days"
                      :class="{ 'schedule__tab--active': tabs[index]}"
                      @click="setTab(index)">
                    {{ day.Caption }}
                </span>
            </div>
        </div>
    </div>
</template>

<style src="./schedule.sass" lang="sass"></style>
<script src="./schedule.js"></script>
