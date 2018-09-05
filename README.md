## Table of Content
- [Status](#status)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Compatibility](#compatibility)
- [Local Development](#local_development)
- [API](#api)
- [License](#license)


## Status
Pre-alpha and under heavy development, do not use!


## Features
- [x] :iphone: <strong>Responsive: </strong> Made mobile responsive with [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [ ] :white_check_mark: <strong>Test: </strong> Adding tests.
- [ ] <strong>Website: </strong>

## Installation

The package can be installed via NPM:

```
npm install react-pricing-dialog --save
```

You’ll need to install React separately since those dependencies aren’t included in the package. Below is a simple example on how to use the PricingTable in a React view.

```js
import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-dialog';

class Example extends React.Component {

  render() {
    return  <PricingTable  highlightColor='#f44336'> ... </PricingTable>
  }
}
```

## Configuration

The basic use of the PricingTable can be described with:

```js
<PricingTable  highlightColor='#1976D2'>
    <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
        <PricingDetail> <b>15</b> projects</PricingDetail>
        <PricingDetail> <b>5 GB</b> storage</PricingDetail>
        <PricingDetail> <b>5</b> users</PricingDetail>
        <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
        <PricingDetail> <b>35</b> projects</PricingDetail>
        <PricingDetail> <b>15 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
        <PricingDetail> <b>100</b> projects</PricingDetail>
        <PricingDetail> <b>30 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
        <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
        <PricingDetail> <b>75 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
</PricingTable>
```

Result:
![react-pricing-dialog](http://i.imgur.com/nScph1f.png)

## Compatibility

### React

We're always trying to stay compatible with the latest version of React. We can't support all older versions of React, since React is still < 1.0 and introducing breaking changes every release.

### Browser Support

The react pricing table is compatible with the latest versions of Chrome, Firefox, and IE11+.

Unfortunately it is difficult to support legacy browsers while maintaining our ability to develop new features in the future.  For IE9 support, it is known that the [classlist polyfill](https://www.npmjs.com/package/classlist-polyfill) is needed, but this may change or break at any point in the future.

## Local Development

The `master` branch contains the latest version of the PricingTable component. To start your example app, you can run `yarn start`. This starts a simple webserver on http://localhost:8080.

You can run `yarn test` to execute the test suite and linters. To help you develop the component we’ve set up some tests that covers the basic functionality. Even though we’re big fans of testing, this only covers a small piece of the component. We highly recommend you add tests when you’re adding new functionality.

### The examples
The examples are hosted within the docs folder and are ran in the simple add that loads the PricingTable. To extend the examples with a new example, you can simply duplicate one of the existing examples and change the unique properties of your example.

## API

### PricingTable props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>highlightColor</td>
          <td>string</td>
          <td>#f44336</td>
          <td>Color of the highlighted slot and buttons.</td>
        </tr>
    </tbody>
</table>

### PricingSlot props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>onClick</td>
          <td>function</td>
          <td></td>
          <td>Function to be called when the button is clicked.</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td></td>
          <td>Title of this slot.</td>
        </tr>
        <tr>
          <td>priceText</td>
          <td>string</td>
          <td></td>
          <td>Label for the price.</td>
        </tr>
        <tr>
          <td>highlighted</td>
          <td>boolean</td>
          <td>false</td>
          <td>Whether to show highlighted header.</td>
        </tr>
    </tbody>
</table>

### PricingDetail props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>strikethrough</td>
          <td>boolean</td>
          <td>false</td>
          <td>Whether to show strikethrough text decoration.</td>
        </tr>
    </tbody>
</table>
