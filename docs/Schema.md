
### `Schema.md`

```md
# Schema — Personal Portfolio

Portfolio menggunakan static JavaScript data, bukan database.

## 1. Profile

```js
const profile = {
  name: String,
  role: String,
  bio: String,
  email: String,
  github: String,
};

const education = {
  institution: String,
  major: String,
  startYear: Number,
  endYear: Number,
  gpa: Number,
};

const experience = {
  position: String,
  company: String,
  startYear: Number,
  endYear: Number,
  description: String[],
};

const project = {
  id: Number,
  title: String,
  category: String,
  date: String,
  description: String,
  technologies: String[],
  images: String[],
  url: String,
};