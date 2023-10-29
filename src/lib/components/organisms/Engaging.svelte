<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Image from '../atoms/Image.svelte';
	import ChatIcon from '$lib/icons/chat.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';

	function openChat() {
		window.voiceflow.chat.open();
	}

</script>
<ContentSection
	id="engaging"
	title="Engage With Us"
	description="We're here to make AI integration straightforward and useful for your business.">

<div id="left">
<span>
<b class="engage">Consultations Tailored to You:</b><br> 
We want to understand what you really need. When you schedule a call with us, 
we'll listen closely to your e-commerce goals and the issues you're facing, 
aiming for a clear plan forward.
<br><br>
<b class="engage">Clear Performance Updates:</b><br>
We'll send you straightforward updates on how our AI tools are working for your 
business. This way, you can see if we're on track with what you hoped for.
<br><br>
<b>Practical Training:</b><br>
AI can be complex, but we're here to simplify it for you. We offer workshops to 
help you get the most out of the tools we set up for you.
<br><br>
<b>Support When You Need It:</b><br>
If you have a question, a problem, or just need something clarified, our team 
is here to help. Drop us a message anytime, and we'll get back to you promptly.
<br><br>
</span>
<div class="right-by-my-side">
	<Sparkles>
		<Button color="primary" on:click={openChat}>
		<ChatIcon slot="icon" />
		Book Call	
	</Button>
</Sparkles>
</div>

</div>
</ContentSection>


<style lang="scss">

	@import '$lib/scss/breakpoints.scss';
	#left{
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}


		.image {
			width: 220px;
			height: 220px;
		}
		@include for-desktop-up {
			.right-by-my-side {
				margin-left:150px;
				width:200px;
			}	
		}
	}
</style>
