<script>
    const { member } = $props();
</script>

<div class="card">
  <div class="card-content">
    <h1>{member.name}</h1>
    <p>Frontend developer & Designer</p>
    <img src="src/lib/assets/darts.png" alt="darts">

    <nav class="contact-info">
      <p>{member.github_handle}</p>
      <p>+31 614772210</p>
    </nav>
  </div>
</div>

<style>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 625px;
    width: 350px;
    border-radius: 50px;
    color: white;
    overflow: hidden; 
    margin-block: 2em;

    .card-content {
      margin-inline: 1.4em;

      img {
        margin-inline: 5em;
        height: 100px;
        width: auto;
      }

      h1 {
        font-weight: bold;
        font-size: 40px;
      }

      p {
        font-size: 32px;
      }
    }
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('src/lib/assets/dartbord.png');
    background-size: 200%;
    background-position: center;
    filter: blur(5px);   
    transform: scale(1.1); 
    z-index: 0;
  }

  .card > * {
    position: relative;
    z-index: 1;
  }
</style>