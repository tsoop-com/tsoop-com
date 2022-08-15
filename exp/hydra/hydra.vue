<script setup>
import REGL from 'regl';
import { Hydra, generators, } from 'hydra-ts'
import ArrayUtils from 'hydra-ts/src/lib/array-utils';

const canvas = ref()

onMounted(() => {

  ArrayUtils.init();
  const regl = REGL(canvas.value);
  const hydra = new Hydra({
    regl,
    width: 1080,
    height: 1080,
  })


  hydra.loop.start();

  const { sources, outputs, render } = hydra;
  const [s0, s1, s2, s3] = sources;
  const [o0, o1, o2, o3] = outputs;
  const { src, osc, gradient, shape, voronoi, noise } = generators;

  osc(() => Math.PI, 0.1, 1)
    .add(o0, [0, 0.5].smooth())
    .mult(src(o0).rotate(Math.PI / 2), 0.6)
    .out(o0);

  src(o0).out(o1);

  render(o1);

})

</script>

<template lang='pug'>
canvas.w-full(ref="canvas")
</template>