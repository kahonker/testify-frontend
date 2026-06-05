<script>
  let { setQuestionsFromChild } = $props();
  let subject = $state("");
  let questionAmount = $state(20);

  async function generateQuestions() {
    try {
      const response = await fetch(
        `http://localhost:5000/make_test/${subject}/${questionAmount}`,
      );
      const data = await response.json();
      console.log(data);
      setQuestionsFromChild(data);
    } catch {
      setQuestionsFromChild([
        {
          question: "What is 2+2?",
          answers: ["1", "2", "3", "4"],
          correct: 3,
          explanation: "2+2=4",
          answered: -1,
        },
      ]);
    }
  }
</script>

<section class="main-menu">
  <h1>Welcome to testify!</h1>

  <form id="test-generator-form" class="test-generator">
    <textarea
      bind:value={subject}
      class="test-generator__subject-input"
      rows="1"
    >
    </textarea>
    <select bind:value={questionAmount} class="test-generator__question-count">
      {#each Array(5) as _, i}
        <option value={(i + 1) * 10}>{(i + 1) * 10}</option>
      {/each}
    </select>
    <button
      type="button"
      class="test-generator__submit-button"
      onclick={generateQuestions}>↑</button
    >
  </form>
</section>
