<template lang="pug">
.flex.flex-col.items-center
  svg#tsoop-logo(version="1.1", xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", width="400", height="108px", viewBox="0 0 400 108", space="preserve")
    line.st2(x1="12.4", y1="34.5", x2="40.3", y2="34.5")
    path.st2(d="M26.4,8.9l-0.2,73.7c0,0,0,10.5,13.3,6.9")
    path.st2(d="M51.8,78.7c6.6,14.2,39.3,13.6,40.3-2.8c1.2-20-38.7-10.1-38.2-27.8c0.4-15.7,26.9-19.2,38.1-5.4")
    circle.st2(cx="129.7", cy="62.1", r="27.4")
    circle.st2(cx="192.9", cy="62.1", r="27.4")
    line.st2(x1="231", y1="33.9", x2="231", y2="115.4")
    circle.st2(cx="258.3", cy="62.1", r="27.4")
    line.st4(x1="12.4", y1="34.5", x2="40.3", y2="34.5")
    path.st4(d="M26.4,8.9l-0.2,73.7c0,0,0,10.5,13.3,6.9")
    path.st4(d="M51.8,78.7c6.6,14.2,39.3,13.6,40.3-2.8c1.2-20-38.7-10.1-38.2-27.8c0.4-15.7,26.9-19.2,38.1-5.4")
    circle.st4(cx="129.7", cy="62.1", r="27.4")
    circle.st4(cx="192.9", cy="62.1", r="27.4")
    line.st4(x1="231", y1="33.9", x2="231", y2="115.4")
    circle.st4(cx="258.3", cy="62.1", r="27.4")
    line.st3(x1="12.4", y1="34.5", x2="40.3", y2="34.5")
    path.st3(d="M26.4,8.9l-0.2,73.7c0,0,0,10.5,13.3,6.9")
    path.st3(d="M51.8,78.7c6.6,14.2,39.3,13.6,40.3-2.8c1.2-20-38.7-10.1-38.2-27.8c0.4-15.7,26.9-19.2,38.1-5.4")
    circle.st3(cx="129.7", cy="62.1", r="27.4")
    circle.st3(cx="192.9", cy="62.1", r="27.4")
    line.st3(x1="231", y1="33.9", x2="231", y2="115.4")
    circle.st3(cx="258.3", cy="62.1", r="27.4")
  canvas#tsoop.zdog-canvas(width="360", height="200")
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import Zdog from 'zdog'
import { paper } from 'paper'

onMounted(() => {

  //Import SVG through Paper.JS for easy object access
  var svgElem = document.getElementById("tsoop-logo")

  svgElem.style.visibility = "hidden";
  svgElem.style.position = "absolute";

  //Get SVG dimensions
  var svgSize = { width: svgElem.getBBox().width, height: svgElem.getBBox().width }
  var svgOffset = { x: -svgSize.width / 2, y: -svgSize.height / 2 }

  var paperProject = new paper.Project([svgSize.width, svgSize.height])
  paperProject.importSVG(svgElem, { import: false })

  //Remove unnecessary top level group
  var svgGroup = paperProject.layers[0].children[0];
  svgGroup.parent.insertChildren(
    svgGroup.index,
    svgGroup.removeChildren()
  );
  svgGroup.remove();

  //Remove clipping mask
  paperProject.layers[0].children[0].remove()

  let illoElement = new Zdog.Illustration({
    element: '.zdog-canvas',
    zoom: 1,
    translate: { y: 60, x: -10 },
    onPrerender: function(ctx) {

    }
  });


  //var referenced by new zdog objects
  var illo = illoElement
  var zIndexMultiplier = 4;
  let anchor = new Zdog.Anchor({
    addTo: illo
  })

  paperProject.layers[0].children.forEach(function(item) {
    var zPos = (item.index - item.parent.children.length / 2) * zIndexMultiplier
    var itemTypes = {
      Path() {
        var pathArray = []
        for (var seg of item.segments) {
          if (seg.index == 0) {
            pathArray.push({ x: seg.point.x, y: seg.point.y })
          }
          else {
            pathArray.push({
              bezier: [
                {
                  x: seg.previous.point.x + seg.previous.handleOut.x,
                  y: seg.previous.point.y + seg.previous.handleOut.y
                },
                { x: seg.point.x + seg.handleIn.x, y: seg.point.y + seg.handleIn.y },
                { x: seg.point.x, y: seg.point.y },
              ]
            })
            if (item.closed && seg.index == item.segments.length - 1) {
              pathArray.push({
                bezier: [
                  { x: seg.point.x + seg.handleOut.x, y: seg.point.y + seg.handleOut.y },
                  { x: seg.next.point.x + seg.next.handleIn.x, y: seg.next.point.y + seg.next.handleIn.y },
                  { x: seg.next.point.x, y: seg.next.point.y },
                ]
              })
            }
          }
          //console.log(pathArray)
        }
        new Zdog.Shape({
          addTo: anchor,
          path: pathArray,
          closed: item.closed,
          stroke: item.strokeWidth,
          fill: item.fillColor != null,
          color: (item.strokeColor)
            ? item.strokeColor.toCSS(true)
            : item.fillColor.toCSS(true),
          translate: { x: svgOffset.x, y: svgOffset.y, z: zPos }
        })
      },
      Shape() {
        var shapeTypes = {
          rectangle() {
            new Zdog.Rect({
              addTo: anchor,
              width: item.size.width,
              height: item.size.height,
              translate: {
                x: item.position.x + svgOffset.x,
                y: item.position.y + svgOffset.y,
                z: item.index * zIndexMultiplier
              },
              fill: (item.fillColor != null),
              stroke: item.strokeWidth,
              color: (item.strokeColor)
                ? item.strokeColor.toCSS(true)
                : item.fillColor.toCSS(true),
            })
          },
          ellipse() {
            new Zdog.Ellipse({
              addTo: anchor,
              width: item.size.width,
              height: item.size.height,
              translate: {
                x: item.position.x + svgOffset.x,
                y: item.position.y + svgOffset.y,
                z: zPos
              },
              fill: (item.fillColor != null),
              stroke: item.strokeWidth,
              color: (item.strokeColor)
                ? item.strokeColor.toCSS(true)
                : item.fillColor.toCSS(true),
            })
          },
          circle() {
            new Zdog.Ellipse({
              addTo: anchor,
              diameter: item.radius * 2,
              translate: {
                x: item.position.x + svgOffset.x,
                y: item.position.y + svgOffset.y,
                z: zPos
              },
              fill: (item.fillColor != null),
              stroke: item.strokeWidth,
              color: (item.strokeColor)
                ? item.strokeColor.toCSS(true)
                : item.fillColor.toCSS(true),
            })
          },
          default() {
            console.log(`Shape ${item.type} not supported`)
          }
        }
        return (shapeTypes[item.type] || shapeTypes["default"])();
      },
      default() {
        console.log(`${item.className} ${item.type} not supported`)
      }
    }
    return (itemTypes[item.className] || itemTypes["default"])();
  })

  const TAU = Zdog.TAU;
  let viewRotation = new Zdog.Vector();
  let dragStartRX, dragStartRY;

  new Zdog.Dragger({
    startElement: '.zdog-canvas',
    onDragStart: () => {
      dragStartRX = viewRotation.x;
      dragStartRY = viewRotation.y;
    },
    onDragMove: function(pointer, moveX, moveY) {
      let moveRX = moveY / illo.width * TAU;
      let moveRY = moveX / illo.width * TAU;
      viewRotation.x = dragStartRX - moveRX;
      viewRotation.y = dragStartRY - moveRY;
    },
  })
  let ticker = 0;
  let cycleCount = 200;
  function animate() {
    let progress = ticker / cycleCount;
    let tween = Zdog.easeInOut(progress % 1, 5);
    illo.rotate.y = tween * Zdog.TAU;
    ticker++;
    anchor.rotate.set(viewRotation)
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
  }
  animate();


});


</script>

<style scoped>
.st0 {
  fill: none;
  stroke: #ee6621;
  stroke-width: 16;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st1 {
  fill: none;
  stroke: #00aeef;
  stroke-width: 16;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st2 {
  fill: none;
  stroke: #cd4a9b;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st3 {
  fill: none;
  stroke: #00aeef;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st4 {
  fill: none;
  stroke: #fff200;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
</style>