<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import KerryButton from "./KerryButton.svelte";
  </script>
  
  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Kerry/KerryButton"
    component={KerryButton}
    argTypes={{
      value: { control: "text" },
      cssClass: {control: "text"},
      click: { action: "click" },
    }}
  />
  
  <!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
  <Template let:args>
    <KerryButton {...args}  on:click={args.click} />
  </Template>
  
  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Primary"
    args={{
      value: "Windi Styled Button",
    }}
  />

  <Story
    name="Danger"
    args={{
        value: "Windi Styled Button",
        cssClass: "danger"
    }}/>

  <Story
    name="Success"
    args={{
        value: "Windi Styled Button",
        cssClass: "success"
    }}
    />