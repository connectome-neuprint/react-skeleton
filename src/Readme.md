Skeleton example:

```js
const swc = {
  "1": {
    "id": 1,
    "type": 1,
    "x": 14.566132,
    "y": 34.873772,
    "z": 7.857,
    "radius": 0.71783,
    "parent": -1
  },
  "2": {
    "id": 2,
    "type": 0,
    "x": 16.02252,
    "y": 33.760513,
    "z": 7.047,
    "radius": 0.463378,
    "parent": 1
  },
  "3": {
    "id": 3,
    "type": 5,
    "x": 17.542,
    "y": 32.604973,
    "z": 6.885001,
    "radius": 0.638007,
    "parent": 2
  },
  "4": {
    "id": 4,
    "type": 0,
    "x": 19.163984,
    "y": 32.022469,
    "z": 5.913,
    "radius": 0.602284,
    "parent": 3
  },
  "5": {
    "id": 5,
    "type": 0,
    "x": 20.44809,
    "y": 30.822802,
    "z": 4.86,
    "radius": 0.436025,
    "parent": 4
  },
  "6": {
    "id": 6,
    "type": 6,
    "x": 21.897903,
    "y": 28.881084,
    "z": 3.402,
    "radius": 0.471886,
    "parent": 5
  },
  "7": {
    "id": 7,
    "type": 0,
    "x": 18.46196,
    "y": 30.289471,
    "z": 8.586,
    "radius": 0.447463,
    "parent": 3
  },
  "8": {
    "id": 8,
    "type": 6,
    "x": 19.420759,
    "y": 28.730757,
    "z": 9.558,
    "radius": 0.496217,
    "parent": 7
  }
};

<Skeleton swc={swc} height="800px" />
```
