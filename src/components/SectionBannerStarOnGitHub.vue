<script setup>
import { mdiGithub, mdiTwitter, mdiLinkedin } from "@mdi/js";
import BaseButton from "@/components/BaseButton.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import { gradientBgPinkRed } from "@/colors";
</script>

<template>
  <SectionBanner :class="gradientBgPinkRed">
    <h1 class="text-3xl text-white mb-6">
      Connect with us on <b>Social Media</b> ;-)
    </h1>
    <div class="flex space-x-4 justify-center">
      <BaseButton
        href="https://twitter.com/ec2software"
        :icon="mdiTwitter"
        label="Twitter"
        target="_blank"
        rounded-full
      />
      <BaseButton
        href="https://github.com/Galant10f88/ec2vue"
        :icon="mdiGithub"
        label="GitHub"
        target="_blank"
        rounded-full
      />
      <BaseButton
        href="https://www.linkedin.com/company/ec2-software-solutions/?trk=top_nav_home"
        :icon="mdiLinkedin"
        label="LinkedIn"
        target="_blank"
        rounded-full
      />
    </div>
  </SectionBanner>
</template>
