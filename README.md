# TodoMVC A/B

This is a front-end A/B testing project that demonstrate how to use [Abo](https://github.com/abojs/abo) for writing A/B tests.

These tests are changing the look of [these](https://github.com/fosojs/todomvc-foso) TodoMVC website.


## How to try it out?

First, clone the TodoMVC website mentioned above and make it hosted by, say, [HarpJS](http://harpjs.com/).


### Production mode

Next, install [Ung](https://github.com/zkochan/ung), create an empty folder an run `ung serve` in it. It will host your A/B testing scripts. After that, run `ung pack dev` in the TodoMVC A/B director. It will bundle the scripts. After this, run `ung publish dev` that will send the bundled scripts to the running Ung server.

Now you'll have your experiment code hosted by Ung. Open the todomvc website and Abo will apply one of the experiments to the page.


### Development mode

Running the Ung server is simulating how the scripts will be shipped to production. However, during development of the experiments, you won't need Ung setuped locally. Instead, you'll just use [Foso](https://github.com/fosojs/foso) to host the exect experiment that you want to develop. For example, if you want to change the **Facebook Like** experiment, go to the /facebook-like directory and run `foso serve`. It will bundle just the current experiment and use `_bundle.js` as the entry point. Next, run `kibe('abodev')` (Read more about Kibe [here](https://github.com/zkochan/kibe)) in the console of the browser, when on TodoMVC. The page will reload and you'll see a demo of the Facebook like experiment. In this mode you'll be able to edit the experiment and the page will be automatically refreshed.


## License

The MIT License (MIT)
