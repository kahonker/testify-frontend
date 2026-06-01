<script>
  let { setQuestionsFromChild } = $props();
  let subject = $state("");
  let questionAmount = $state(20);

  function generateQuestions(){
    /*
      Add requests to backend here
    */
   console.log("pressed")
    setQuestionsFromChild([
      {
        "question": "What is 2+2?",
        "answers": ["1", "2", "3", "4"],
        "explanation": "2+2=4",
      },
    ])
  }
</script>

<h1>Welcome to testify!</h1>

<form id="form" class="main">
  <textarea bind:value={subject} class="main__textarea--subject"> </textarea>
  <select bind:value={questionAmount} class="main__select--questions">
    {#each Array(5) as _, i}
      <option value={(i + 1) * 10}>{(i + 1) * 10}</option>
    {/each}
  </select>
  <button class="main__button--send" onclick={generateQuestions}>↑</button>
</form>