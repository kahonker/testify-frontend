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