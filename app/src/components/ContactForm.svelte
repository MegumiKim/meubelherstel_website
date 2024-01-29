<script>
	import { redirect } from "@sveltejs/kit";

  let name = '';
  let tel = ''
  let email = '';
  let message = '';
  let isSubmitting = false;
  let formErrors = {};
  let submissionResponse = "";

  function validateForm() {
    formErrors = {};
    if (name.trim() === '') {
      formErrors.name = 'Name is required';
    }
    if (email.trim() === '') {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
    }
    if (message.trim() === '') {
      formErrors.message = 'Message is required';
    }
    return Object.keys(formErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validateForm()) {
      return;
    }

    isSubmitting = true;
    submissionResponse = '';

    const formData = { name, email, message, tel };
    // action="https://formsubmit.co/d726fb6880179208d9663c1c89832491"
    try {
      const response = await fetch('https://formspree.io/f/xoqgjkyp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      
      window.location.href = '/thankyou/';

    } catch (error) {
      console.error('Submit Error:', error);
      submissionResponse = 'Failed to submit form. Please send an email or call Wim directly.';
    } finally {
      isSubmitting = false;
      name = '';
      email = '';
      message = '';
      tel=""
    }
  }
</script>


<form
class="flex-1 flex flex-col gap-3 sm:max-w-[500px] text-lg"
on:submit|preventDefault={handleSubmit}
>
<label for="" class="text-gray-500"
  ><span>Naam</span><input class="input h-8 mt-1" type="text" name="name" required bind:value={name} /></label
>
{#if formErrors.name}
<p class="error">{formErrors.name}</p>
{/if}
<label for="" class="text-gray-500"
  ><span>Email</span><input
    class="input h-8"
    type="email"
    name="email"
    bind:value={email} 
    required
  /></label
>
{#if formErrors.email}
<p class="error">{formErrors.email}</p>
{/if}
<label for="" class="text-gray-500"
  ><span>Tel <small>(optioneel)</small></span><input
    class="input h-8"
    type="string"
    name="tel"
    bind:value={tel} 
  /></label
>

<label for="" class="text-gray-500"
  ><span>Bericht</span><textarea
    class="textarea p-2"
    name="message"
    bind:value={message}
    cols="20"
    rows="7"
    required
  /></label
>
{#if formErrors.message}
<p class="error">{formErrors.message}</p>
{/if}
<button type="submit" class="btn btn-xl bg-slate-900 text-white py-4 rounded-[5px]"
disabled={isSubmitting}
> {#if isSubmitting}Submitting...{:else}Versturen{/if}</button>

{#if submissionResponse}
<p class="response">{submissionResponse}</p>
{/if}
</form>

<style>
  .error {
    color: red;
  }
  .response {
    margin-top: 10px;
  }
</style>

