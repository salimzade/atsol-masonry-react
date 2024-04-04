# atsol-masonry-react

## A lightweight React responsive masonry component.
<br/>

[![npm](https://img.shields.io/npm/v/atsol-masonry-react)](https://www.npmjs.com/package/atsol-masonry-react)
[![npm](https://img.shields.io/npm/l/atsol-masonry-react)](https://www.npmjs.com/package/atsol-masonry-react)
[![npm](https://img.shields.io/npm/dm/atsol-masonry-react)](https://www.npmjs.com/package/atsol-masonry-react)
[![github](https://img.shields.io/github/stars/salimzade/atsol-masonry-react?style=social)](github.com:salimzade/atsol-masonry-react)

# Installaton

`npm i atsol-masonry-react`

`yarn add atsol-masonry-react`

# Usage example

```javascript
import { Masonry, MasonryGrid } from "atsol-masonry-react"

const images = [] // Your images array

function App() {
    return (
        <MasonryGrid>
            <Masonry columnsCount={3} gutter={16} className={"waterfall"}>
                {images.map((i, idx) => {
                    return (
                        <img
                            src={i.url}
                            alt="test"
                            key={idx}
                            style={{ minWidth: "100%" }}
                        />
                    );
                })}
            </Masonry>
        </MasonryGrid>
    )
}
```

# Docs

`MasonryGrid` Default values for breakpoints can be customized throught props

```javascript
<MasonryGrid columnsBreakpoints={{ 320: 1, 576: 2, 768: 3, 992: 3 }} >
```

following props for MasonryGrid are available
- columnsBreakpoints
- style

`Masonry`
following props for MasonryGrid are available
- columnsCount
- gutter
- className
- style

**note**
_gutter width is set in pixels_