# Air 66 Design YOURLS Admin Theme

[![Air 66 Design logo](screenshots/A66-Logo.png)](https://air66design.com)

This is a responsive admin theme for use with [YOURLS](https://github.com/YOURLS/YOURLS), a self hosted set of PHP scripts that let you run your own URL shortener.

The theme includes a slide in off page navigation, fixed below the nav url shortener on laptop and desktop and a relative postioned url shortener on mobile.

The tables and graphs have a horizontal scroll on mobile when the viewport becomes too small.

**[Air 66 Design Website](https://air66design.com)**

## Screen Shots

**LOGIN PAGE**

![](screenshots/login.png)

**ADMIN PAGE**

![](screenshots/admin.png)

**NAV OPEN**

![](screenshots/nav-open.png)

## Installing

1. First install the YOURLS scripts and database.
2. [Download the latest installable ZIP](https://github.com/marugalde/yourls-theme/releases/latest/download/air66Theme.zip).
3. Extract it into `user/plugins/` in your YOURLS install. It creates the `user/plugins/air66Theme/` directory.
4. Login into the admin area of YOURLS and activate the plugin.

The source repository is for development; the release ZIP contains only the plugin and its built runtime assets.

## Development

Install dependencies with `npm ci` and build the runtime assets with `npm run build`.
Pushing a `v*` tag publishes a GitHub Release with the installable ZIP.

## Customisation & Use

Feel free to use and customise this theme as you like. If you would like us to make changes to suit your needs please contact us via our [website form](https://air66design.com/contact).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* We took inspiration from the layout and design of [Sleeky](https://github.com/Flynntes/Sleeky) and used a number of their styles for the tables and other elements.
* [YOURLS](https://github.com/YOURLS/YOURLS) The URL shortener PHP scripts.
