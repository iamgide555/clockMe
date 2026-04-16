# ClockMe — Clock-In/Clock-Out App Implementation Plan

## Context

The project is a fresh Ionic 8 + Angular 20 standalone-components from the start this app will need to login using User and Password and after user login it will redirect to page that with 5 tabs(Info, Store, Scan, Employee, Setting)

1. Info tab will show information of the store(Store name, How many employee, Phone Number of the store, Time to clock-in, Time that already Late, Time to clock-out, Rate of payment per hour, Pay period = Daily, Max Late, Max miss, Device Name)
2. Store Tab will show list of Store and also user can Edit Store data that mention in Info tab
3. Scan Tab, when click on this tab it will activate camera on Phone for QR code scan and read info of that QR code
4. Employee Tab will show list of employee of this store and also can add, edit, delete
<!-- app with 3 empty placeholder tabs. The goal is to transform it into a functional clock-in/clock-out time tracker with local persistence, a live elapsed timer, session history, and a weekly summary. -->
