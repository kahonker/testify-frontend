<script>
  let subject = "";
  let questionAmount = 20;
</script>

<h1>Welcome to testify!</h1>

<form id="form" class="main">
  <input bind:value={subject} />
  <select bind:value={questionAmount}>
    {#each Array(5) as _, i}
      <option value={(i + 1) * 10}>{(i + 1) * 10}</option>
    {/each}
  </select>
  <button type="submit" class="send">↑</button>
</form>

<style>
  #form {
    display: flex;

    .send {
      font-size: 16px;
      padding: 5px 10px;
      border-radius: 0px 5px 5px 0px;
      color: var(--accent);
      background: rgba(var(--accent), 0.15);
      border: 2px solid transparent;
      transition: 0.3s;

      &:hover {
        background-color: rgba(var(--accent), 100);
      }
      &:focus-visible {
        outline: 1px solid var(--accent);
        outline-offset: 0px;
      }
    }
  }
</style>
