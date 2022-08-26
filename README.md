# Table of Contents
- [Table of Contents](#table-of-contents)
- [OGNIDHRO EKUSH](#ognidhro-ekush)
- [DOCUMENTATION](#documentation)
  - [Changing the default tab in the schedules page](#changing-the-default-tab-in-the-schedules-page)
  - [Adding new routine](#adding-new-routine)

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

## Adding new routine

- Create a new .json file with a name corresponding to the level and the semester name. e.g. L2S2.json in src/data/schedules/routines
- There should be two top level key, one is "name", another one is "detailedname".
- The value of "name" should match the filename without .json part.

```json
{
    "name":"L2S2",
    "detailedname":"Level 2, Semester 2"
}
``` 
- Refer to *src/data/schedules/routines* to add rest of the data.
   