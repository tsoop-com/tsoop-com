// vite.config.js
import Components from "file:///Users/davay/Documents/%D0%A4%D0%A0%D0%A3%D0%9A%D0%A2/tsoop/tsoop-com/node_modules/.pnpm/unplugin-vue-components@0.25.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import Icons from "file:///Users/davay/Documents/%D0%A4%D0%A0%D0%A3%D0%9A%D0%A2/tsoop/tsoop-com/node_modules/.pnpm/unplugin-icons@0.16.5/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///Users/davay/Documents/%D0%A4%D0%A0%D0%A3%D0%9A%D0%A2/tsoop/tsoop-com/node_modules/.pnpm/unplugin-icons@0.16.5/node_modules/unplugin-icons/dist/resolver.mjs";
import Unocss from "file:///Users/davay/Documents/%D0%A4%D0%A0%D0%A3%D0%9A%D0%A2/tsoop/tsoop-com/node_modules/.pnpm/unocss@0.55.2_postcss@8.4.27_vite@4.4.9/node_modules/unocss/dist/vite.mjs";
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from "file:///Users/davay/Documents/%D0%A4%D0%A0%D0%A3%D0%9A%D0%A2/tsoop/tsoop-com/node_modules/.pnpm/unocss@0.55.2_postcss@8.4.27_vite@4.4.9/node_modules/unocss/dist/index.mjs";
import extractorPug from "file:///Users/davay/Documents/%D0%A4%D0%A0%D0%A3%D0%9A%D0%A2/tsoop/tsoop-com/node_modules/.pnpm/@unocss+extractor-pug@0.55.2_pug@3.0.2/node_modules/@unocss/extractor-pug/dist/index.mjs";
import { defineConfig } from "file:///Users/davay/Documents/%D0%A4%D0%A0%D0%A3%D0%9A%D0%A2/tsoop/tsoop-com/node_modules/.pnpm/vite@4.4.9/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  lastUpdated: true,
  server: {
    strictPort: true
  },
  plugins: [
    Components({
      dirs: [".vitepress/theme/components", "components"],
      extensions: ["vue", "ts"],
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      globalNamespaces: ["global"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
      resolvers: [
        IconsResolver({
          componentPrefix: ""
        })
      ]
    }),
    Icons({
      defaultStyle: "vertical-align: middle;"
    }),
    Unocss({
      transformers: [
        transformerDirectives()
      ],
      presets: [
        presetIcons({
          scale: 1.2,
          extraProperties: {
            "vertical-align": "middle"
          }
        }),
        presetUno()
      ],
      extractors: [
        extractorSplit,
        extractorPug()
      ]
    })
  ],
  optimizeDeps: {
    include: ["vue", "@vueuse/core", "three", "gsap"]
  },
  ssr: {
    noExternal: ["hydra-ts"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGF2YXkvRG9jdW1lbnRzL1x1MDQyNFx1MDQyMFx1MDQyM1x1MDQxQVx1MDQyMi90c29vcC90c29vcC1jb21cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kYXZheS9Eb2N1bWVudHMvXHUwNDI0XHUwNDIwXHUwNDIzXHUwNDFBXHUwNDIyL3Rzb29wL3Rzb29wLWNvbS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZGF2YXkvRG9jdW1lbnRzLyVEMCVBNCVEMCVBMCVEMCVBMyVEMCU5QSVEMCVBMi90c29vcC90c29vcC1jb20vdml0ZS5jb25maWcuanNcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSdcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xuXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZXJEaXJlY3RpdmVzLCBwcmVzZXRJY29ucywgcHJlc2V0VW5vLCBleHRyYWN0b3JTcGxpdCB9IGZyb20gJ3Vub2NzcydcbmltcG9ydCBleHRyYWN0b3JQdWcgZnJvbSAnQHVub2Nzcy9leHRyYWN0b3ItcHVnJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgc2VydmVyOiB7XG4gICAgc3RyaWN0UG9ydDogdHJ1ZVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkaXJzOiBbJy52aXRlcHJlc3MvdGhlbWUvY29tcG9uZW50cycsICdjb21wb25lbnRzJ10sXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICd0cyddLFxuICAgICAgZGlyZWN0b3J5QXNOYW1lc3BhY2U6IHRydWUsXG4gICAgICBjb2xsYXBzZVNhbWVQcmVmaXhlczogdHJ1ZSxcbiAgICAgIGdsb2JhbE5hbWVzcGFjZXM6IFsnZ2xvYmFsJ10sXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgZXhjbHVkZTogWy9ub2RlX21vZHVsZXMvLCAvXFwuZ2l0L10sXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgY29tcG9uZW50UHJlZml4OiAnJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pLFxuICAgIEljb25zKHtcbiAgICAgIGRlZmF1bHRTdHlsZTogJ3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7JyxcbiAgICB9KSxcbiAgICBVbm9jc3Moe1xuICAgICAgdHJhbnNmb3JtZXJzOiBbXG4gICAgICAgIHRyYW5zZm9ybWVyRGlyZWN0aXZlcygpLFxuICAgICAgXSxcbiAgICAgIHByZXNldHM6IFtcbiAgICAgICAgcHJlc2V0SWNvbnMoe1xuICAgICAgICAgIHNjYWxlOiAxLjIsXG4gICAgICAgICAgZXh0cmFQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHByZXNldFVubygpLFxuICAgICAgXSxcbiAgICAgIGV4dHJhY3RvcnM6IFtcbiAgICAgICAgZXh0cmFjdG9yU3BsaXQsXG4gICAgICAgIGV4dHJhY3RvclB1ZygpXG4gICAgICBdXG4gICAgfSksXG4gIF0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsndnVlJywgJ0B2dWV1c2UvY29yZScsICd0aHJlZScsICdnc2FwJ10sXG4gIH0sXG4gIHNzcjoge1xuICAgIG5vRXh0ZXJuYWw6IFsnaHlkcmEtdHMnXVxuICB9LFxuXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUUxQixPQUFPLFlBQVk7QUFDbkIsU0FBUyx1QkFBdUIsYUFBYSxXQUFXLHNCQUFzQjtBQUM5RSxPQUFPLGtCQUFrQjtBQUV6QixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsV0FBVztBQUFBLE1BQ1QsTUFBTSxDQUFDLCtCQUErQixZQUFZO0FBQUEsTUFDbEQsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBLE1BQ3hCLHNCQUFzQjtBQUFBLE1BQ3RCLHNCQUFzQjtBQUFBLE1BQ3RCLGtCQUFrQixDQUFDLFFBQVE7QUFBQSxNQUMzQixTQUFTLENBQUMsVUFBVSxjQUFjLE9BQU87QUFBQSxNQUN6QyxTQUFTLENBQUMsZ0JBQWdCLE9BQU87QUFBQSxNQUNqQyxXQUFXO0FBQUEsUUFDVCxjQUFjO0FBQUEsVUFDWixpQkFBaUI7QUFBQSxRQUNuQixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0osY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxNQUNMLGNBQWM7QUFBQSxRQUNaLHNCQUFzQjtBQUFBLE1BQ3hCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsVUFDVixPQUFPO0FBQUEsVUFDUCxpQkFBaUI7QUFBQSxZQUNmLGtCQUFrQjtBQUFBLFVBQ3BCO0FBQUEsUUFDRixDQUFDO0FBQUEsUUFDRCxVQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0EsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLE9BQU8sZ0JBQWdCLFNBQVMsTUFBTTtBQUFBLEVBQ2xEO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxZQUFZLENBQUMsVUFBVTtBQUFBLEVBQ3pCO0FBRUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
