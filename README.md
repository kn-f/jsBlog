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
1. Host the `index.html` page wherever you like, even in your local PC (don't forget to put the `script.js`in the `js/` subfolder)
1. Open the webpage in your browser, it will redirect you to the default page (currently a Markdown test/sample)
1. Append the following params to the page address according to your needs:
    - `pageId` and `service` (both of them *must* be set) - to determine which page to load
    - `css` - to determine which CSS to load (see above)

**WARNING: Use the same capitalization of the parameters as indicated above or the page will not load as expected**

**WARNING: Shared document must be set to *public* in the sharing service you're using or other people might not be able to see it**
## Services implemented
- Google Drive - param `service=gdrive`
- OneDrive - param `service=onedrive`
- Dropbox - param `service=dropbox`
- Local / Same server as the page - param `service=local` - **WARNING: Use this only for local testing if you're unsure**
## Determining the *pageId* parameter
In order to determine which parameter you have to pass to *pageId* follow one of the guides below depending on which service you're planning to use
### Google Drive
1. Follow *Share a file publicly* section of the instructions to share pubblicly a document: <https://support.google.com/docs/answer/2494822#link_sharing>.
1. Make sure that the permisisons are set to *View* or anyone will be able to modify your file.
1. Once you have the *shareable link*, the *pageId* will be the the string between `https://docs.google.com/document/d/` and `edit?usp=sharing`
i.e. for link <https://docs.google.com/document/d/15shNCte_Ur6AVG5gzUdtiI_D701D8YeGhv4c4nUoSpI/edit?usp=sharing> you'll have to use `pageId=15shNCte_Ur6AVG5gzUdtiI_D701D8YeGhv4c4nUoSpI` as a parameter.
### OneDrive
This one is quite complex and requires a bit of work. If you can please avoid using this sharing service since this page is not using the official *API* and a hosted page to support *CORS* calls. Due to this performances are far from acceptable.
1. Follow these instructions to embed a document: <https://support.office.com/en-us/article/Embed-files-directly-into-your-website-or-blog-ed07dd52-8bdb-431d-96a5-cbe8a80b7418>
1. You should get an *iframe* tag like this `<iframe src="https://onedrive.live.com/embed?cid=EE5622101E19E5A7&resid=EE5622101E19E5A7%215828&authkey=ADWVYQbpHHPxJHQ" width="98" height="120" frameborder="0" scrolling="no"></iframe>`
1. Copy the *src* string from *question mark* (?) until the end  (it should include only *cid* and *resid* parameters) and then *encode* it in *base64*. You can find an online service here: (Base64 Encode)[https://www.base64encode.org/]
1. The resulting encoded value will be the `pageId` parameter to be passed.
i.e. for link <https://1drv.ms/t/s!AqflGR4QIlburUSh7qK_K5OxF4MF> the embed code is `<iframe src="https://onedrive.live.com/embed?cid=EE5622101E19E5A7&resid=EE5622101E19E5A7%215828&authkey=ADWVYQbpHHPxJHQ" width="98" height="120" frameborder="0" scrolling="no"></iframe>`. 
The reulting string to be encoded will be `cid=EE5622101E19E5A7&resid=EE5622101E19E5A7%215828&authkey=ADWVYQbpHHPxJHQ`.
The encoded value is `Y2lkPUVFNTYyMjEwMUUxOUU1QTcmcmVzaWQ9RUU1NjIyMTAxRTE5RTVBNyUyMTU4MjgmYXV0aGtleT1BRFdWWVFicEhIUHhKSFE=` so you'll have to use `pageId=Y2lkPUVFNTYyMjEwMUUxOUU1QTcmcmVzaWQ9RUU1NjIyMTAxRTE5RTVBNyUyMTU4MjgmYXV0aGtleT1BRFdWWVFicEhIUHhKSFE=` as a parameter.
### Dropbox
1. Follow these instructions to share to share pubblicly a document: <https://www.dropbox.com/help/files-folders/view-only-access>
1. Once you have the link, the *pageId* will be the the string between `https://www.dropbox.com/s/` and `?dl=0`
i.e. for link <https://www.dropbox.com/s/2b99tssnd00au13/test.txt?dl=0> you'll have to use `pageId=2b99tssnd00au13/test.txt` as a parameter
### Local
1. Ensure that the file is pubblicly available (i.e. on a webserver) unless you want to use this for testing.
1. The *pageId* will be the the full name of the file with path relative to the root of the serving page.
i.e. for file *README.md" in the same folder as the webpage, you'll have to use `pageId=README.md` as a parameter
## Example
Imagine you want to load document `15shNCte_Ur6AVG5gzUdtiI_D701D8YeGhv4c4nUoSpI` hosted in *Google Drive*, you'll have to append to the browser URL the following `?pageId=15shNCte_Ur6AVG5gzUdtiI_D701D8YeGhv4c4nUoSpI&service=gdrive`.
If it works properly you can then share the obtained URL with anyone and they'll be able to see the same as you as well.
## TODO
- User guide & explainations (WIP)
- Better error handling
    - Default home page with quick guide
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
- Advanced mode:
    - Base64 encoded JSON object as parameters
    - Raw url for CSS, page etc
    -Advanced mode route builder
## Support libraries / projects
- [CORS Anywhere](https://github.com/Rob--W/cors-anywhere/#documentation)
- [Showdown](https://github.com/showdownjs/showdown)
