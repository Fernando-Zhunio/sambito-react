
# Components
These are all the available components used in the template

Alert
-------

![](images/docs/alert.png)

```html
<Alert color="blue" className="mb-2">
  <strong className="font-bold mr-1">Holy smokes!</strong>
  <span className="block sm:inline">
    Something seriously bad happened.
  </span>
</Alert>
```
```js
Alert.propTypes = {
  color: PropTypes.oneOf([
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink",
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
```


Avatar
-----------------

![](images/docs/avatar.png)

```html
<Avatar
  size={48}
  src={`images/face4.jpg`}
  alt={`avatar`}
  className="mr-4"
  status="green"
/>
```
```js
Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number.isRequired,
  status: PropTypes.oneOf([
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink",
  ]),
  style: PropTypes.string,
  className: PropTypes.string,
};
```



Badge
-----------------

![](images/docs/badge.png)

```html
<Badge color="blue" className="mr-2">
  1
</Badge>
```
```js
Badge.propTypes = {
  color: PropTypes.oneOf([
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink",
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
```


Card
-----------------

![](images/docs/card.png)

```html
<Card>
  <CardBody>
  </CardBody>
</Card>
```
```js
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
```


```js
CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
```


Carousel
-----------------

![](images/docs/carousel.png)

```html
<Carousel
  next={next}
  previous={previous}
  className="rounded-lg overflow-hidden"
>
  {images.map((image, index) => (
    <CarouselSlide
      key={index}
      index={index}
      activeIndex={activeIndex}
    >
      <div
        key={index}
        className="relative w-full bg-top bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          height: "390px",
        }}
      />
    </CarouselSlide>
  ))}

  <CarouselIndicators
    items={images}
    activeIndex={activeIndex}
    onClickHandler={goToIndex}
  />
</Carousel>
```
```js
CarouselLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
```


```js
CarouselRightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
```

```js
CarouselIndicators.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
};
```

```js
CarouselSlide.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
```

```js
Carousel.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
```

Chart
-------

![](images/docs/chart.png)

```html
<Chart
  type="bar"
  data={data.chart.data}
  height={data.chart.height}
  options={data.chart.options}
/>
```
```js
Chart.propTypes = {
  type: PropTypes.oneOf([
    "bar",
    "hotizontalbar",
    "line",
    "bubble",
    "doughnut",
    "pie",
    "polar",
    "radar",
  ]).isRequired,
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  options: PropTypes.object.isRequired,
};
```



Divider
-----------------

![](images/docs/divider.png)

```html
<Divider text="Forecast" />
```
```js
Divider.propTypes = {
  text: PropTypes.string
};
```


Dropdown
-----------------

```html
<Dropdown className="ml-4 relative">
  <DropdownToggle>
    <Avatar
      size={28}
      src={`images/avatar.jpg`}
      alt={`avatar`}
    />
  </DropdownToggle>
  <DropdownMenu>
    <div className="py-1">
      <a
        href="#"
        className="block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      >
        Activity
      </a>
      <a
        href="#"
        className="block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      >
        Your Profile
      </a>
      <a
        href="#"
        className="block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      >
        Settings
      </a>
      <a
        href="#"
        className="block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out border-t border-1 border-gray-200"
      >
        Sign out
      </a>
    </div>
  </DropdownMenu>
</Dropdown>
```
```js
Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
```

```js
DropdownToggle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
```

```js
DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.string,
};
```


Loading
-----------------

![](images/docs/loading.png)

```html
<Loading size={32}/>
```
```js
Loading.propTypes = {
  size: PropTypes.number,
};
```


Logo
-----------------

![](images/docs/logo.png)

```html
<Logo height={30} width={120} />
```
```js
Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
```


WidgetActivityStream
-------

![](images/docs/stream.png)

```html
<WidgetActivityStream
  title="Period ending 2017"
  stream={data.activity}
/>
```
```js
WidgetActivityStream.propTypes = {
  stream: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      avatar: PropTypes.string,
      body: PropTypes.string
    })
  ).isRequired
};
```




WidgetImageStatCard
-----------------

![](images/docs/imagestatcard.png)

```html
<WidgetImageStatCard
  title="image stat card"
  images={[
    `images/unsplash/2.jpg`,
    `images/unsplash/1.jpg`,
    `images/unsplash/13.jpg`,
  ]}
  imageHeight={200}
  stats={stats}
/>
```
```js
WidgetImageStatCard.propTypes = {
  images: PropTypes.array.isRequired,
  imageHeight: PropTypes.number.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired
};
```

WidgetNewsCard
-------

![](images/docs/newscard.png)

```html
<WidgetNewsCard
  title="Feed"
  subtitle={
    <div className="inline-flex">
      <button className="inline-flex justify-center rounded-l-lg border border-gray-300 px-3 py-1 bg-white font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 text-sm">
        ◄
      </button>
      <button className="inline-flex justify-center rounded-r-lg border-t border-r border-b border-gray-300 px-3 py-1 bg-white font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 text-sm">
        ►
      </button>
    </div>
  }
  feed={data}
/>
```
```js
WidgetNewsCard.propTypes = {
  feed: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      avatar: PropTypes.string,
      subject: PropTypes.string,
      message: PropTypes.string
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.element
};
```

WidgetPostCard
--------

![](images/docs/postcard.png)

```html
<WidgetPostCard
  title="Shrimp and Chorizo Paella"
  subtitle="Yesterday"
  images={[
    `images/unsplash/1.jpg`,
    `images/unsplash/15.jpg`,
  ]}
  imageHeight={315}
  text="Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
/>
```
```js
WidgetPostCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  imageHeight: PropTypes.number.isRequired
};
```

WidgetPricing
-------

![](images/docs/pricing.png)

```html
<WidgetPricing
  title={item.title}
  subtitle={item.subtitle}
  price={item.price}
  features={item.features}
  icon={item.icon}
/>
```
```js
WidgetPricing.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      available: PropTypes.bool
    })
  )
};
```

WidgetProfileCard
-----------

![](images/docs/profilecard.png)

```html
<WidgetProfileCard
  name={"John Doe"}
  avatar={`images/face1.jpg`}
  images={[
    `images/unsplash/4.jpg`,
    `images/unsplash/6.jpg`,
  ]}
  location={"London, Uk"}
  imageHeight={200}
  stats={stats}
/>
```
```js
WidgetProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  imageHeight: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired
};
```

Sidebar
-------

![](images/docs/sidebar.png)

```html

```
```js
Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onSetOpen: PropTypes.func
};
```

SidebarItem
------------

```js
SidebarItem.propTypes = {
  route: PropTypes.object,
  index: PropTypes.number,
  activeRoute: PropTypes.number,
  toggleMenu: PropTypes.func
};
```


WidgetStatCard
--------

![](images/docs/widget.png)

```html
<WidgetStatCard
  title="New users"
  value={"576,789"}
  subtitle={
    <span className="block text-gray-800 dark:text-gray-200">
      <span className="text-red-500">▼&nbsp;95.87%&nbsp;</span>
      Percentage change
    </span>
  }
  icon={<Users strokeWidth={2} size={16} />}
  type={"blue"}
/>
```
```js
WidgetStatCard.propTypes = {
  fill: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.string
};
```


WidgetTimeline
--------

![](images/docs/timeline.png)

```html
<WidgetTimeline title="Period ending 2017" timeline={data} />;
```
```js
WidgetTimeline.propTypes = {
  title: PropTypes.string,
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      date: PropTypes.string
    })
  )
};
```

WidgetWeatherCard
-----------

![](images/docs/weather.png)

```html
<WidgetPostCard
  title="Shrimp and Chorizo Paella"
  subtitle="Yesterday"
  images={[
    `images/unsplash/1.jpg`,
    `images/unsplash/15.jpg`,
  ]}
  imageHeight={315}
  text="Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
/>
```
```js
WidgetWeatherCard.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  days: PropTypes.number
};
```