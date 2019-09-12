<template>
  <div id="app" class="site-wrapper">
    <div class="site-wrapper__inner container">
      <div class="row">
        <div class="col-xl-10">
          <div class="site-header">
            <h1>{{ $t('conferenceProgram') }}</h1>
            <div>
              <button class="btn btn-primary" @click="toggleLocale">
                {{ locale === 'ru' ? 'En' : 'Ru' }}
              </button>
            </div>
          </div>
          <schedule :days="data"></schedule>
        </div>
        <div class="col-xl-2 d-none d-xl-block">
          <img src="https://placeimg.com/190/480/animals"></img>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" src="./components/base.sass"></style>
<script src="./App.js"></script>
