import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useZodForm } from '@hookform/zod';
import { Button, Input, Textarea } from '@shadcn/ui';

const assessmentSchema = z.object({
  stress: z.enum(['low', 'medium', 'high']),
  sleep: z.enum(['well', 'average', 'poor']),
  mood: z.enum(['happy', 'neutral', 'sad']),
  decisionMaking: z.enum(['easy', 'hard']),
  wellBeing: z.enum(['good', 'okay', 'bad']),
});

const SymptomAssessment = () => {
  const form = useZodForm({ schema: assessmentSchema });

  const onSubmit = (data) => {
    const message = `Hello, I am feeling ${data.stress} stress, ${data.sleep} sleep, ${data.mood} mood, ${data.decisionMaking} decisions, and ${data.wellBeing} overall well-being.`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div>
        <label>How would you rate your stress?</label>
        <select {...form.register('stress')}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label>How well do you sleep?</label>
        <select {...form.register('sleep')}>
          <option value="well">Well</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div>
        <label>How is your mood?</label>
        <select {...form.register('mood')}>
          <option value="happy">Happy</option>
          <option value="neutral">Neutral</option>
          <option value="sad">Sad</option>
        </select>
      </div>
      <div>
        <label>How easy is it for you to make decisions?</label>
        <select {...form.register('decisionMaking')}>
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label>How would you describe your overall well-being?</label>
        <select {...form.register('wellBeing')}>
          <option value="good">Good</option>
          <option value="okay">Okay</option>
          <option value="bad">Bad</option>
        </select>
      </div>
      <Button type="submit">Send to WhatsApp</Button>
    </form>
  );
};

export default SymptomAssessment;