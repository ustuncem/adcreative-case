import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {Selectbox} from './components';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="mx-auto grid h-full max-w-2xl place-items-center">
        <p>CENTERED!</p>
        <Selectbox />
      </main>
    </QueryClientProvider>
  );
}
