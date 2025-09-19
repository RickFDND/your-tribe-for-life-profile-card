<script>
    const { member } = $props();
</script>

<div class="card">
  <div class="card-inner">
    <div class="card-content-back">
      <img src="src/lib/assets/darts.png" alt="darts">
    </div>

    <div class="card-content-front">
      <h1>{member.name}</h1>
      <p>Frontend developer & Designer</p>
      <img src="src/lib/assets/darts.png" alt="darts">

      <nav class="contact-info">
        <p>{member.github_handle}</p>
        <p>+31 614772211</p>
      </nav>
    </div>
  </div>
</div>

<style>
  .card {
    perspective: 1000px; 
    height: 625px;
    width: 350px;
    margin-block: 2em;
    border-radius: 50px;
    color: white;

    &:hover {
      .card-inner {
        transform: rotateY(180deg);
      }
    }
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transform-style: preserve-3d;
    transition: transform 0.8s;
  }

  .card-content-front,
  .card-content-back {
    position: absolute;
    inset: 0;
    border-radius: 50px;
    backface-visibility: hidden;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 625px;
    width: 350px;

    img {
      margin-inline: 5em;
      height: 100px;
      width: auto;
    }
  }

  .card-content-back {
    background: black;
    transform: rotateY(0deg); 
  }

  .card-content-front {
    background: transparent;
    transform: rotateY(180deg); 
    border: 2px solid black;

    h1 {
      font-weight: bold;
      font-size: 40px;
      margin-bottom: 0;
    }

    p {
      font-size: 32px;
      margin-inline: 1.4em;
    }

    img {
      position: absolute;
    }

    .contact-info {
      padding-top: 8.5em;
    }
  }

  .card-content-front::before {
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

  .card-content-front > * {
    position: relative;
    z-index: 1;
  }
</style>