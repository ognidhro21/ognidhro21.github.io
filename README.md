
# OGNIDHRO EKUSH
Source code of website of Ognidhro Ekush

- Language: markdown
- Path: README.md

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=ognidhro21&style=for-the-badge&logo=false)

---
# DOCUMENTATION 

## Changing the default tab in the schedules page

```javascript
// change the array index in src/routes/schedules/+page.svelte
// 0 for classes, 1 for exams, 2 for events
let selected = items[0].name; // sett the default tab to classes

```