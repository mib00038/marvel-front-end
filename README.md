# Marvel Comic Book Reading List

## Page
Page to our front end technical test. Our challenge is for you to build a Marvel Comic Book Reading List. We respect your time and therefore request you don't spend too much time on it, there are two required user stories and three bonus user stories. It's important to note that the bonus user stories are not compulsory and will not carry additional weighting.

---

## Technology
The only requirement we ask is that you use React and TypeScript. The application is preloaded with [Material UI](https://mui.com), however feel free to use another component library or CSS. Feel free to use other technologies you feel is necessary to complete the task.

---

## User Stories (Required)

### Listing Comics

#### Viewing a list of comics
* GIVEN I am a customer
* WHEN a visit the page
* THEN I should see a 4 comics featuring "3-D Man"

#### Paginating a list of comics
* GIVEN I am a customer
* WHEN a visit the page
* THEN I should see a 4 comics featuring "3-D Man"
* WHEN I click next button
* THEN I should see the next 4 comics featuring "3-D Man"
* WHEN I click next button
* THEN I should see the next 4 comics featuring "3-D Man"
* WHEN I click previous button
* THEN I should see the previous 4 comics featuring "3-D Man"

---

## User Stories (Bonus)

### Filtering by Characters

#### Filter by character
* GIVEN I am a customer
* WHEN a visit the page
* THEN I should see a list of characters that I can filter by
* WHEN I click "A-Bomb (HAS)"
* THEN I should 4 comics featuring "A-Bomb (HAS)"

### Reading List

#### Add to Reading List
* GIVEN I am a customer
* WHEN a visit the page
* THEN I should see a 4 comics featuring "3-D Man"
* WHEN I click "Add to Reading List"
* THEN the comic is added to my reading list

#### Delete from Reading List
* GIVEN I am a customer
* WHEN a visit the page
* THEN I should see a 4 comics featuring "3-D Man"
* WHEN I click "Add to Reading List"
* THEN the comic is added to my reading list
* WHEN I click "Remove from Reading List"
* THEN the comic is removed from my reading list

---

## Designs
We have provided designs in Figma for you to follow. Please do your best to match the design requirements.

* [Designs](https://www.figma.com/file/LtaGsdHbGuyiXpdiiFlVU8/front-end-test)
* [Design System](https://www.figma.com/file/ApDIXzniHvL2EapdFJmAAF/design-system%2Ffront-end-test)

---

## API's
Please use the [Marvel API](https://developer.marvel.com) and use the two necessary API's listed below the build the application. You will need to sign up to obtain a Public and Private API Key.

### Characters
https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey={api_key}&hash={hash}

### Comics
https://gateway.marvel.com/v1/public/characters/1011334/comics?limit=4&ts=1&apikey={api_key}&hash={hash}

### Hashed Value
Please note that you will need to pass a [MD5 Hashed](https://www.md5hashgenerator.com) query parameter. This will be a digest of {timestamp}{private_key}{api_key} for example:

* API Key: 1234
* Private Key: ABCD
* Timestamp: 1

The final value that will need to be hashed is 1ABCD1234.

---

## Testing (Required)

The application is preloaded with React Testing Library, therefore we do expect a certain level of test coverage.

---

## Storybook (Bonus)

The application is preloaded with Storybook, if it is part of your workflow to use Storbook then feel free to use it.

---

## Getting Started

### Install Dependencies

```
npm install
```

### Run Application
```
npm run dev
```

### Run StoryBook
```
npm run storybook
```