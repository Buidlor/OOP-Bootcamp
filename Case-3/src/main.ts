import './style.css'

class Content {
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
}

class Article extends Content {}

class Ad extends Content {
  get title(): string {
    return super.title.toUpperCase();
  }
}

class Vacancy extends Content {
  get title(): string {
    return super.title + " - apply now!";
  }
}

const contents: Content[] = [
  new Article("Article title 1", "Article text 1"),
  new Ad("Ad title", "Ad text"),
  new Vacancy("Vacancy title", "Vacancy text"),
  new Article("Article title 2", "Article text 2")
];

console.log(contents);


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Use Case 3</h1>
    <p>We are preparing three types of content for a website:</p>	
    <ul>
      <li> Articles </li>
      <li> Ads</li>
      <li>Vacancies</li>
    </ul>
    All of those have a title and text. When showing the title, they are modified as follows: articles remain as they are,
    ads are shown in all caps and vacancies are appended with " - apply now!". The original title should still be retrievable, so no modification is permanent.
    <br> <br>
    Have an array with two articles, one ad and one vacancy. Use this array to show all content types (title + text).
    <br> <br>
    Bonus: an article can be marked as "breaking news". If this is the case, the title is prepended with "BREAKING: ". Extra bonus: display all the content with the appropriate html tags.

    <br> <br>
    <h2>Output:</h2>
    <div id="output">
      ${contents.map(content => `
        <div>
          <h3>${content.title}</h3>
          <p>${content.text}</p>
        </div>
      `).join('')}

    </div>
  </div>
`


