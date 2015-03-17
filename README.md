# Sails Hook Thumber

Create fastly thumber for you file and store it in locale disk or in Amazon S3

Check [native-thumber](https://github.com/wi2/native-thumber) for config thumb


## You need :
- ImageMagick's : http://www.imagemagick.org/
- Magick++

```
sudo apt-get install libmagick++-dev
```

## Installation

```
npm install sails-hook-thumber --save
```


## USECASE

```
thumbConf =
	fd: item.fd
	filename: filename
	size: item.size

sails.hooks.thumber.process thumbConf, () ->
	console.log "success start"

```

