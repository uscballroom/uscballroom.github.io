##### This is the code repository for the SC Ballroom Dance Team website [uscballroom.org](www.uscballroom.org).

# Editing the site
You can do all basic editing on github.com, from any computer.  You must be logged in to GitHub.com with an account that is a collaborator to this repository.  To add collaborators, see the instructions under the heading below.

Please note that all the code in this repository is public &mdash; even if something is invisible to people on uscballroom.org, people will be able to view it in this repository.  So, do not put any important data such as passwords in the repository.

*These instructions assume you have at least basic experience with HTML, and that you will edit the site through github.com in your web browser.  Also note that you can make changes from your computer using `git` in a terminal and a text editor, just like any other GitHub repository.  This is highly recommended if you are making large functional/structural/style changes to the site.  However, the instructions below do not say anything about how to do this; you should acquire HTML, CSS, basic JavaScript, Git, and Jekyll skills on your own before attempting significant edits.*

See **View past versions of the repository** at the bottom for more about the GitHub system.

# How to edit various parts of the site:

## Update the class days and times
- You will have to update the class days, times, and locations at least every semester.
- The class days, times, and locations appear in multiple places in the site, so for each of the following places, follow the **Edit page HTML** instructions.
  - Home page ([`_pages/home.html`](_pages/home.html))
    - Find the part that says `class="Home_classes"`.
  - Schedule page ([`_pages/schedule.html`](_pages/schedule.html))
    - For the weekly schedule, find the section that has `class="SchedulePage_weeklyList"`.
    - For the annual schedule which tells people when we'll do various dances over the year, you can edit the code under the `Dance Schedule` heading.
- When editing the pages, make sure you follow the format that already exists.  Mostly, you'll just have to change a few words to a few different words.  You may need to copy and paste sections, for instance to add more list items in the Schedule.

## Edit page HTML
1. Navigate to the page you want to edit.  All the pages appear in the [`_pages`](_pages) folder; click on one to view it.  Most of the time, you will not need to edit any HTML outside the `_pages` folder.
1. Click the pencil icon at the top-right to edit the file.
1. Make your edits. *Note: unfortunately, the **Preview changes** button on the edit page won't work for our HTML files.*
  - The HTML code you write is normal HTML, with just one caveat.  If you ever need to specify a URL of something within this website (most commonly, for links to other pages in the site), you must precede the URL with `{{site.github.url}}`.  For example, using an imaginary "Dance Attire" page:
    ```
    THE NORMAL WAY: DON'T DO THIS
    <a href="/dance-attire">Learn about official competition attire</a>

    OUR WAY: YOU NEED TO DO THIS
    <a href="{{site.github.url}}/dance-attire">Learn about official competition attire</a>
    ```
    This is also true for other URLs that appear, such as image sources:
    ```
    <img class="SchedulePage_map" src="{{site.github.url}}/images/map_to_ped.png"/>
    ```
    Note that you definitely cannot do this for links that go out of the site.  However, I recommend that links that go out of the site should have `target="_blank"` on them, which makes them open in a new tab.  For example, this is on the Contact Us page:
    ```
    Find us on <a href="https://www.facebook.com/USCBallroom/" target="_blank">Facebook</a> for updates
    ```
    You can look at the Join, Schedule, and Contact Us pages to see these examples in action.
  - If you encounter any blocks that look like `{{ ... }}` or `{% ... %}`, be very careful around them and generally don't edit anything between the brackets.  These blocks are for smartly generating content like lists of things.
  - To edit the people on the Leaders page, follow the instructions at the top of the [`_pages/leaders.html`](_pages/leaders.html) file.  Upload the photo of each leader to the [`images/leaders`](images/leaders) folder.  Note that you have to crop it to the square shape that will appear on the Leaders page.
1. If you want, you can type a summary of your changes in the box right under the heading "Commit changes". This is useful for viewing the editing history of the site, but you don't have to do it.
1. To save the changes, click the button at the bottom that says **Commit changes**.
1. Wait up to 10 minutes or so for the public website to update.

## Edit CSS
- The CSS that applies to the structure of the site, including the header and the navigation bar, is inside the [`css/main.css`](css/main.css) file.
  - You generally will not need to edit this, though you may want to if you need to change the colors that appear on the site.
    - This one file contains most of the colors that appear on the site.
    - Keep in mind that many of the colors appear several times in this file, so to tweak that color you must edit `main.css` in multiple locations.
- The CSS that applies to pages is inside the [`css/page-specific.css`](css/page-specific.css) file.
  - For instance, all the styles of the big horizontal colored bars on the Home page exists in this file.
  - You may add things to this file if you want CSS that's specific to your page
  - For organization, please name your CSS classes beginning with the page name.  For instance, for the map to PED on the schedule page, the CSS class is `.schedule-map`, not just `.map`.  This will guarantee that the CSS classes only apply to the page you're working on.

## Change a page's title that appears in the navigation bar
- Warning: The code that creates the navigation bar is in the `_layouts/normal.html` file, but the page names are not coded there &mdash; they are in the individual page files within the [`_pages`](_pages) folder.
- Just open the page as in the **Edit page HTML** instructions, but just change the title that appears in the top section.  For example, to rename the "Schedule" page to "Agenda", you would change:
  ```
  ---
  title: Schedule
  ---
  <div class="page-container">
    ...rest of the file below...
  ```
  to:
  ```
  ---
  title: Agenda
  ---
  <div class="page-container">
    ...rest of the file below...
  ```

## Edit the page order on the navigation bar
- Follow the **Edit page HTML** instructions, but instead of a specific page, open the file [`_data/page_order.yaml`](_data/page_order.yaml).
- Make sure to follow the format already there.
  - Within a line, everything after a hashtag is a "comment" and is ignored by the system.
  - Each page in the list must have a hyphen at the beginning, then a space, then the name of the HTML file of that page (within the `_pages` folder).

## Add a page to the site
1. Navigate to the [`_pages`](_pages) folder.
1. Click the **Create new file** button, at the top-right.
1. Give the file a name.  The name should be lowercase with dashes for spaces, and it must end in `.html`.  For instance, if you were to create a Dance Attire page, you would call it `dance-attire.html`.
1. Important: Add a title to the page, as the very first thing in the new file.  This title will appear in the site navigation bar and on the web browser tab.  It is okay to include spaces and capital letters here.  For instance, for our Dance Attire example, you would type the following:
  ```
  ---
  title: Dance Attire
  ---
  ```
1. Add the content.  Most pages will have a `<div class="page-container">` surrounding them.  I suggest copying and pasting from the Join page to get the general structure, because the Join page doesn't have any fancy custom stuff (don't copy from the Home page, because it's very different from the other pages).  For example, our final Dance Attire file might look like:
  ```
  ---
  title: Dance Attire
  ---
  <div class="page-container">
    <h1>Appropriate Dance Attire</h1>
    <p>At competitions, you want to look your sharpest!  Here's the dance attire guidelines for competitions!</p>
    <p>Check out our <a href="{{site.github.url}}/schedule">leaders page</a> to see some sharp-looking dancers!</p>
    <h3>Traditional Women's dance attire</h3>
    <p>Most women wear a dress, makeup, and styled hair for dancing if they are following.  Our board members can help you style your hair on the day of the competition.</p>
    <p>When leading, some women have a similar outfit to when they're following, and some wear attire that's more similar to traditional men's attire, such as black pants and some sort of shirt.</p>
    <h3>Traditional Men's dance attire</h3>
    <ul>
      <li>Slicked back hair</li>
      <li>Black pants</li>
      <li>Long-sleeve, button-down shirt</li>
      <li>Tie or bowtie</li>
      <li>Vest, if you have it</li>
    </ul>
  </div>
  ```
1. IMPORTANT: Add the page to [`_data/page_order.yaml`](_data/page_order.yaml).  Otherwise, it will not be included in the site navigation bar.  Follow the instructions in the **Edit the page order on the navigation bar** section.
1. Wait up to 10 minutes or so for the public website to update.

## Add images to the header slideshow
1. Navigate to this repository's [`images/backgrounds`](images/backgrounds) folder, in github.com.
1. Click the **Upload files** button, near the top-right.
1. Select the photo or photos on your computer you wish to add to the slideshow.
1. Wait up to 10 minutes or so for the public website to update.

# How to do certain GitHub stuff:

## Add collaborators to the repository
Note: whoever you add must have a GitHub account (free), and as a collaborator they will have full edit access to the code in the repository.  (They will not be able to add/remove collaborators or change other repository settings.)
1. Log in to the `uscballroom` GitHub account, then make sure you're looking at the `uscballroom.github.io` repository ([shortcut](https://github.com/uscballroom/uscballroom.github.io)).
1. Click the **Settings** tab at the top.  Note that this button will only appear if you're logged in to `uscballroom`.
1. Click **Collaborators** button on the left.  You may have to reenter the `uscballroom` GitHub account password.
1. Search for the GitHub username of the account you want to add as a collaborator and click **Add collaborator**.
1. Whoever you added will receive an email, and they must click the link in the email to accept the invite and become a collaborator.

## View past versions of the repository
Every edit you make is reversible, since this is a system using Git.  On GitHub, you edit files, then when you save them, the system makes a Git commit.  A commit is like a snapshot of the entire repository at the time you made the commit, and you can view that snapshot later, even after making other changes.
1. When viewing a file (not editing), click the **History** button at the top-right to see a list of various commits that changed that file in the past.
1. Click on a **<>** button to browse the repository's code at that point in the past.  You can navigate through the files as you do normally.
  - Be careful, because when you view the code in the past, the GitHub site looks pretty much exactly the same as it does when you're viewing the up-to-date code.
1. When you're done viewing the past code, click on the repository name at the top, i.e. **uscballroom.github.io**, to get back to the normal view of the most up-to-date code.
