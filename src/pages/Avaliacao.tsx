import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from 'shadcn-ui';

const Avaliacao = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const message = `Olá, aqui estão minhas respostas sobre meu bem-estar emocional:\n` + 
      `1. ${data.question1}\n` + 
      `2. ${data.question2}\n` + 
      `3. ${data.question3}\n` + 
      `4. ${data.question4}\n` + 
      `5. ${data.question5}`;
    const phoneNumber = '5531991315958';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 space-y-4">
      <h1 className="text-2xl font-bold">Formulário de Avaliação de Bem-Estar Emocional</h1>
      <Input {...register('question1', { required: 'Esta pergunta é obrigatória.' })} placeholder="Como você se sente hoje?" />
      {errors.question1 && <span className="text-red-500">{errors.question1.message}</span>}
      <Input {...register('question2', { required: 'Esta pergunta é obrigatória.' })} placeholder="Você tem sentido mais stress do que o normal?" />
      {errors.question2 && <span className="text-red-500">{errors.question2.message}</span>}
      <Input {...register('question3', { required: 'Esta pergunta é obrigatória.' })} placeholder="Você tem conseguido dormir bem?" />
      {errors.question3 && <span className="text-red-500">{errors.question3.message}</span>}
      <Input {...register('question4', { required: 'Esta pergunta é obrigatória.' })} placeholder="Você se sente apoiado por pessoas ao seu redor?" />
      {errors.question4 && <span className="text-red-500">{errors.question4.message}</span>}
      <Textarea {...register('question5', { required: 'Esta pergunta é obrigatória.' })} placeholder="Pode compartilhar qualquer outra coisa que gostaria?" />
      {errors.question5 && <span className="text-red-500">{errors.question5.message}</span>}
      <Button type="submit" className="bg-blue-500 text-white">Enviar</Button>
    </form>
  );
};

export default Avaliacao;