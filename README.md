# PunkAPI - Server

## Fetch latest punkapi data
The PunkAPI server is a pretty simple rails app, that provides authentication and a way to serve up the raw data.

The data itself is stored in the [punkapi](https://github.com/samjbmason/punkapi) repository, it is pulled into this app through a git submodule.

**Fetch the latest data**
Move into the `punkapi-data` folder and from there run in the terminal

```
$ git fetch
$ git merge origin/master
```

This will download any new data from the `punkapi` repo, you can then run

```
$ rake beer:load
```

This will load up all the data and add it to the db.
