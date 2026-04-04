import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FormData {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
}

const Avaliacao = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const message = `Olá, aqui estão minhas respostas sobre meu bem-estar emocional:\n` +
      `1. ${data.question1}\n` +
      `2. ${data.question2}\n` +
      `3. ${data.question3}\n` +
      `4. ${data.question4}\n` +
      `5. ${data.question5}`;
    const whatsappURL = `https://wa.me/5531991315958?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 md:pt-36 pb-20 container mx-auto px-4 max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <h1 className="font-display text-2xl md:text-3xl font-normal text-foreground">Formulário de Avaliação de Bem-Estar Emocional</h1>
          <Input {...register('question1', { required: 'Esta pergunta é obrigatória.' })} placeholder="Como você se sente hoje?" />
          {errors.question1 && <span className="text-destructive text-sm">{errors.question1.message}</span>}
          <Input {...register('question2', { required: 'Esta pergunta é obrigatória.' })} placeholder="Você tem sentido mais stress do que o normal?" />
          {errors.question2 && <span className="text-destructive text-sm">{errors.question2.message}</span>}
          <Input {...register('question3', { required: 'Esta pergunta é obrigatória.' })} placeholder="Você tem conseguido dormir bem?" />
          {errors.question3 && <span className="text-destructive text-sm">{errors.question3.message}</span>}
          <Input {...register('question4', { required: 'Esta pergunta é obrigatória.' })} placeholder="Você se sente apoiado por pessoas ao seu redor?" />
          {errors.question4 && <span className="text-destructive text-sm">{errors.question4.message}</span>}
          <Textarea {...register('question5', { required: 'Esta pergunta é obrigatória.' })} placeholder="Pode compartilhar qualquer outra coisa que gostaria?" />
          {errors.question5 && <span className="text-destructive text-sm">{errors.question5.message}</span>}
          <Button type="submit">Enviar</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Avaliacao;
