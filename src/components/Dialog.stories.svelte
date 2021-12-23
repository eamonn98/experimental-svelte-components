<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Dialog from "./Dialog.svelte";
  </script>
  
  <!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
  <!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
  <Meta
    title="Kerry/Dialog"
    component={Dialog}
    argTypes={{
      title: { control: "text" },
      text: {control: "text"},
      dismissText: {control: "text"}
    }}
  />
  
  <!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
  <Template let:args>
    <Dialog {...args} />
  </Template>
  
  <!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
  <Story
    name="Default"
    args={{
      title: "Test Dialog",
      text: "Just to let you know, this is only a test storyboard",
      dismissText: "Alrighty"
    }}
  />