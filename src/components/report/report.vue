<template>
    <div class="report">
        <span class="report__duration">{{ data.Duration }}</span>
        <div class="report__image">
            <div class="report__pic" :style="'background-image: url(//siterscs.com/doctors/' + data.ComponentId + '/images/thumb.jpg?state=8)'"></div>
        </div>
        <div class="report__info">
            <div class="report__speaker-info">
                <div class="report__author">{{ data.SpeakerCaption }}</div>
                <div class="report__country-info">
                    <div class="report__country-flag" :data-id="data.CountryId"></div>
                    <div class="report__country-name">{{ data.CountryName }}</div>
                </div>
            </div>
            <div class="report__caption">{{ data.Caption }}</div>
            <div class="report__lecture" v-if="data.VideoUrl">
                <icon name="video" class="svg-icon report__icon"></icon>
                <a :href="'//siterscs.com/' + data.VideoUrl" class="report__video-link" target="_blank" rel="noreferrer">
                    Посмотреть лекцию
                </a>
                <icon name="lock" class="svg-icon report__icon"></icon>
            </div>
        </div>
    </div>
</template>

<style src="./report.sass" lang="sass"></style>
<script src="./report.js"></script>
