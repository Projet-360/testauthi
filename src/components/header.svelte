<script lang="ts">
  import { page } from '$app/stores'
  import DarkMode from '$UITools/DarkMode/index.svelte'
  import { SignIn, SignOut } from '@auth/sveltekit/components'

  import FullScreen from './FullScreen.svelte'

  const handleChange = (event: Event) => {
    const currentTarget = event.currentTarget as HTMLSelectElement // Cast ici si vous êtes sûr que c'est un élément select
    const { value } = currentTarget

    document.cookie = `lang=${value};`
    location.reload()
  }
</script>

<header>
  <nav>
    <ul>
      <li aria-current="{$page.url.pathname === '/' ? 'page' : undefined}">
        <a href="/">Home</a>
      </li>
      <li aria-current="{$page.url.pathname === '/about' ? 'page' : undefined}">
        <a href="/about">About</a>
      </li>
      <li
        aria-current="{$page.url.pathname === '/transitionAPI'
          ? 'page'
          : undefined}"
      >
        <a href="/transitionAPI">transitionAPI</a>
      </li>
      <li
        aria-current="{$page.url.pathname === '/protected'
          ? 'page'
          : undefined}"
      >
        <a href="/protected">Protected</a>
        <a href="/login">login</a>
      </li>
    </ul>
  </nav>

  <div class="left-side">
    
    <DarkMode />

    <FullScreen />
  </div>
</header>
