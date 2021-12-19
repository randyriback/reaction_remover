## What is this?

Reaction Remover is a simple way to curb misinformation on Facebook by removing "reaction-based" emojis entirely from the UX.

## Why is this?

I found that the "reactions" on Facebook very heavily leaned into mean-spirited territory within the context of articles sharing important information. For one example, it was evident that users would "laugh" at articles detailing important updates regarding the Covid-19 pandemic. 


## How did you build this? 

After quite a bit of trial and error of deciding the best way to account for FB's infinite scroll (I'd first attempted to use the [chrome.runtime API](https://developer.chrome.com/docs/extensions/reference/runtime/) to send messages between files), I'd settled on injecting the necessary JavaScript upon a scroll event. 

## Where can I find Reaction Remover

On the [Chrome Web Store](https://chrome.google.com/webstore/detail/reaction-remover/dfiapeofdbbemafjadbomikmdlgkihjn?fbclid=IwAR1em2dGGyerYNVaBWOVqeRGRIh8WcmtOH1RxDMnrW7Ck5LyTHlfpNPvayg)

## How can I make my own Chrome Extension?

A great place to start is Neil Patel's blog, which can be found [here.](https://neilpatel.com/blog/chrome-extension/)
