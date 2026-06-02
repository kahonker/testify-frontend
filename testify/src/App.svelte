<script>
  import Main from "./lib/Main.svelte";
  import Question from "./lib/Question.svelte";
    import QuestionView from "./lib/QuestionView.svelte";

  let questions = $state()

  function setQuestions(generatedQuestions) {
    questions = generatedQuestions;
  }
</script>

<section id="main">
  {#if !questions}
    <Main setQuestionsFromChild={setQuestions}/>
  {:else}
    <QuestionView questions={questions} />
    <!-- <Question question = {
      {
        "question": "What is 2+2?",
        "answers": ["1", "2", "3", "4"],
        "explanation": "2+2=4"
      }
    }/> -->
  {/if}
</section>


