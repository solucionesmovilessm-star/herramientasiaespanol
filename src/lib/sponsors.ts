import anuncios from '../data/anuncios.json';
import patrocinios from '../data/patrocinios.json';
import pro from '../data/pro.json';

export interface SponsorSlot {
  activo: boolean;
  patrocinador: string;
  texto: string;
  url: string;
  hasta: string;
}

export type SponsorId = 'newsletter' | 'shorts' | 'listado';

const slots = patrocinios as Record<SponsorId, SponsorSlot>;

export function getSponsor(id: SponsorId) {
  const slot = slots[id];
  const urlOk = /^https:\/\/\S+$/.test(slot.url);
  const ready = slot.activo && slot.patrocinador.trim() && slot.texto.trim() && urlOk;
  const broken = slot.activo && !ready;
  return { ...slot, ready, broken };
}

export function getPro() {
  return pro;
}

export function getAdOptions() {
  return anuncios.opciones;
}

export const sponsorLabels: Record<SponsorId, string> = {
  newsletter: 'la newsletter',
  shorts: 'los shorts',
  listado: 'este listado',
};
