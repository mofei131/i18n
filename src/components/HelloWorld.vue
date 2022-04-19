<template>
  <div class="hello">
		<div class="ab-menu">
			<div @click="setLang('cn')">简体中文</div>
			<div @click="setLang('en')">English</div>
		</div>
		<div>{{$t('loginPage.login')}}</div>
  </div>
</template>

<script>
	import {locale} from '../lang/util.js'
export default {
	data() {
		return {
			lang: {
				cn: '简体中文',
				en: 'English'
			},
			langType: locale() || 'cn'
		}
	},
	mounted() {
		// console.log(this.$i18n.locale)
	},
  methods: {
     setLang(lang) {
       if (lang !== this.$i18n.locale) {
         locale(lang);
         location.reload(); // 页面重新加载
       }
     },
   } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
