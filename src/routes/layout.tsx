import { component$, Slot } from '@builder.io/qwik';

export default component$((): any => {
  return (
    <div class="page">
      <main>
        <Slot />
      </main>
      <div class="section dark">
        <div class="container">
        </div>
      </div>
    </div>
  );
});
