<script>
  import Main from "./lib/Main.svelte";
  import QuestionView from "./lib/QuestionView.svelte";
  import ResultsView from "./lib/ResultsView.svelte";

  let questions = $state();
  let submitted = $state(false);

  function setQuestions(generatedQuestions) {
    questions = generatedQuestions;
  }

  function setSubmitted() {
    submitted = !submitted;
  }

  function refreshPage() {
    window.location.reload();
  }
</script>

<div id="app" class="app">
  {#if !questions}
    <Main setQuestionsFromChild={setQuestions} />
  {:else if !submitted}
    <QuestionView bind:questions {setSubmitted} />
  {:else}
    <ResultsView {questions} {refreshPage} />
  {/if}
</div>

