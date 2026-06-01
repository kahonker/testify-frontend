<script>
  import Main from "./lib/Main.svelte";
  import Question from "./lib/Question.svelte";

  let questions = $state()

  function setQuestions(generatedQuestions) {
    questions = generatedQuestions;
  }
</script>

<section id="center">
  {#if !questions}
    <Main setQuestionsFromChild={setQuestions}/>
  {:else}
    <Question question = {
      {
        "question": "What is 2+2?",
        "answers": ["1", "2", "3", "4"],
        "explanation": "2+2=4"
      }
    }/>
  {/if}
</section>


