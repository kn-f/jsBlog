# Serverless Blog - jsBlog
Name to be reviewed
## Aim
This is a Blog engine (Markdown to HTML converter) purely executed on the client (browser).
It was inspired by *Octopress* and *Jekyll*. I just wanted to make it possible for everyone to host a blog withotut a server and have pages stored in online drives
## Current status
Way early alpha. Basic functionalities are working/supported:
- Load any page based on various online services
- Set CSS from the [Bootswatch](https://bootswatch.com/) - just use the name of the theme
## Usage
1. Host the page wherever you like, even in your local PC
1. Open the webpage in your browser, it will redirect you to the default page (currently a Markdown test/sample)
1. Append the following params to the page address according to your needs:
    - `pageId` and `service` (both of them must be set) - to determine which page to load
    - `css` - to determine which CSS to load (see above)

**WARNING: Use the same capitalization as indicated or the page will not load as expected**

**WARNING: Document must be set to *public* in the sharing service you're using or other people might not be able to see it**
## Services implemented
- Google Drive - param `gdrive`
- OneDrive - param `onedrive`
- Dropbox - param `dropbox`
- Local / Same server as the page - param `local` - **WARNING: Use this only for local testing if you're unsure**
## Determining the *pageId*
In order to determine which parameter you have to pass to *pageId* follow one of the guides below depending on which service you're planning to use
### Google Drive
### OneDrive
### Dropbox
## Example
Imagine you want to load document `15shNCte_Ur6AVG5gzUdtiI_D701D8YeGhv4c4nUoSpI` hosted in *Google Drive*, you'll have to append to the browser URL the following `?pageId=15shNCte_Ur6AVG5gzUdtiI_D701D8YeGhv4c4nUoSpI&service=gdrive`
If it works you can then share the obtained URL with anyone and they'll be able to see the same as you as well.
## TODO
- User guide & explainations
- Better error handling
- Example with header, footer, left index
- Add option for plugins
- Add default - 404 & link to guide page
- add more services (which ones?)
- Improve CSS
- Implement services shortcuts
- tools to create the page structure
    - auto index creator
    - set of templates
    - online editor 
## Support libraries / projects
- [CORS Anywhere](https://github.com/Rob--W/cors-anywhere/#documentation)
- [Showdown](https://github.com/showdownjs/showdown)
