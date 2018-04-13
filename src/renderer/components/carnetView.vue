<template>
<v-container grid-list-xs>
    <h1 align="center">جدول المواعيد
    <v-icon>date_range</v-icon></h1>
    <vue-calendar
            :show-limit="3"
            :events="events"
            @show-all="showAll"
            @day-clicked="dayClicked"
    ></vue-calendar>
</v-container>
</template>

<script>
    export default {
      name: 'carnetView',
      data: function () {
        return {
          events: [ {
            start: new Date('2018-4-6'),
            end: new Date('2018-4-9'),
            title: 'FooEvent',
            class: 'testClass'
          } ]
        }
      },
      methods: {
        showAll (events) {
        },
        dayClicked (day) {
          console.log(day)
        }
      },
      created () {
        this.$calendar.eventBus.$on('show-all', events => this.showAll(events))
        this.$calendar.eventBus.$on('day-clicked', day => this.dayClicked(day))
      }
    }
</script>

<style>
    .events {
        font-size: 12px;
        cursor: pointer;
        padding: 0 0 0 4px;

    .event {
        height: 18px;
        line-height: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 4px 2px 0;
        color: rgba(0, 0, 0, .87);
        background-color: rgb(212, 220, 236);
    }
    }
    .more-link{
        color: rgba(0,0,0,.38);
    }
    .calendar-body {
        display: grid;
        grid-template-rows: 5% 95%;
    }
    .days-header {
        display: grid;
        grid-auto-columns: 14.25%;
        grid-template-areas: "a a a a a a a";

        border-top:1px solid #e0e0e0;
        border-left:1px solid #e0e0e0;
        border-bottom:1px solid #e0e0e0;
    }

    .days-body {
        display: grid;
        grid-template-rows: auto;
    }

    .day-number{
        text-align: right;
        margin-right: 10px;
    }


    .day-label{
        text-align: center;
        border-right:1px solid #e0e0e0;
    }

    .week-row {
        display: grid;
        grid-template-areas: "a a a a a a a";
        grid-row-gap: 5px;
        grid-auto-columns: 14.25%;
    }

    .week-row{
        border-left:1px solid #e0e0e0;
    }

    .week-day{
        padding:4px;
        border-right:1px solid #e0e0e0;
        border-bottom:1px solid #e0e0e0;
    }

    .week-day.disabled{
        background-color: rgb(245, 245, 245);
    }

    .week-day.not-current>.day-number{
        color: rgb(195,195,195);
    }

    .week-day.today > .day-number{
        font-weight: bold;
        color: red;
    }
    .calendar-header{
        align-items: center;
    }
    .header-left, .header-right{
        flex:1;
    }
    .header-center {
        flex: 3;
        text-align: center;
    }
    .title{
        margin: 0 5px;
    }
    .prev-month, .next-month{
        cursor: pointer;
    }
    .vue-calendar {
        display: grid;
        grid-template-rows: 10% 90%;
        background: #fff;
        margin:0 auto;
        width: 1000px;
    }
</style>