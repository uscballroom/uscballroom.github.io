##### This is the code repository for the SC Ballroom Dance Team website [uscballroom.org](www.uscballroom.org).

# Editing the site
You can do all basic editing on github.com, from any computer.  You must be logged in to GitHub.com with an account that is a collaborator to this repository.  To add collaborators, see the instructions under the heading below.

Please note that all the code in this repository is public &mdash; even if something is invisible to people on uscballroom.org, people will be able to view it in this repository.  So, do not put any important data such as passwords in the repository.

*Also note that changes can be made from your computer using `git` on a terminal/command prompt, and a text editor &mdash; just like any other GitHub repository.  This is highly recommended if you are making large functional/structural/style changes to the site.  The instructions below do not have to do ; you should have Git & web development skills (HTML+CSS+JavaScript) before attempting this.*

# How to:

## Update the class days and times
- You will have to update the class days, times, and locations at least every semester.
- The class days, times, and locations appear in multiple places in the site, so follow the **Edit page HTML** instructions below for the following places:
  - Home page ([`_pages/home.html`](_pages/home.html))
    - Find the part that says `class="Home_classes"`.
  - Schedule page ([`_pages/schedule.html`](_pages/schedule.html))
    - For the weekly schedule, find the section that has `class="SchedulePage_weeklyList"`.
    - For the annual schedule which tells people when we'll do various dances over the year, you can edit the code under the `Dance Schedule` heading.
- When editing the pages, make sure you follow the format that already exists.  Mostly, you'll just have to change a few words to a few different words.  You may need to copy and paste sections, for instance to add more list items in the Schedule.

## Edit page HTML
1. TODO

## Change a page's title that appears in the navigation bar
- The code for the navigation bar is in the `_layouts/normal.html` file, but the page names are not there.  Do not edit the `_layouts/normal.html` file.  They are in the individual page files.
- Follow the **Edit page HTML** instructions below, but just edit the top section of the

## Add images to the header slideshow
1. Navigate to this repository's [images/backgrounds](images/backgrounds) folder, in github.com.
1. Click the **Upload files** button, near the top-right.
1. Select the photo or photos on your computer you wish to add to the slideshow.
1. Wait up to 10 minutes or so for the public website to update.

## Add collaborators to the repository
Note: whoever you add must have a GitHub account (free), and as a collaborator they will have full edit access to the code in the repository.  (They will not be able to add/remove collaborators or change other repository settings.)
1. Log in to the `uscballroom` GitHub account, then make sure you're looking at the `uscballroom.github.io` repository ([shortcut](https://github.com/uscballroom/uscballroom.github.io)).
1. Click the **Settings** tab at the top.  Note that this button will only appear if you're logged in to `uscballroom`.
1. Click **Collaborators** button on the left.  You may have to reenter the `uscballroom` GitHub account password.
1. Search for the GitHub username of the account you want to add as a collaborator and click **Add collaborator**.
1. Whoever you added will receive an email, and they must click the link in the email to accept the invite and become a collaborator.
