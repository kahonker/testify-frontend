<script>
  let subject = "";
  let questionAmount = 20;
</script>

<h1>Welcome to testify!</h1>

<form id="form" class="main">
  <textarea bind:value={subject} class="main__textarea--subject"> </textarea>
  <select bind:value={questionAmount} class="main__select--questions">
    {#each Array(5) as _, i}
      <option value={(i + 1) * 10}>{(i + 1) * 10}</option>
    {/each}
  </select>
  <button type="submit" class="main__button--send">↑</button>
</form>