<script>
    import {count} from "./store";
    const sayiAzalt = () => {
        count.update(value => value-1)
    }
</script>
<button on:click={sayiAzalt}>
    -
</button>
<style>
     button {
    margin-left: 20px;
    position: relative;
    padding: 12px 28px;
    font-size: 16px;
    font-weight: 600;

    color: white;
    background: linear-gradient(135deg, #8b5cf6, #6d28d9);
    border: none;
    border-radius: 8px;

    cursor: pointer;
    transition: 
      transform 0.15s ease,
      box-shadow 0.15s ease,
      background 0.2s ease;

    box-shadow: 0 6px 16px rgba(109, 40, 217, 0.35);
  }

  /* Hover */
  button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(109, 40, 217, 0.45);
    background: linear-gradient(135deg, #7c3aed, #5b21b6);
  }

  /* Active (click) */
  button:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(109, 40, 217, 0.35);
  }

  /* Disabled */
  button:disabled {
    background: #c4b5fd;
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.7;
  }

  /* Focus (accessibility) */
  .btn:focus-visible {
    outline: 3px solid rgba(139, 92, 246, 0.5);
    outline-offset: 2px;
  }
</style>