import type { Schema, Struct } from '@strapi/strapi';

export interface CursoLivreCursoLivre extends Struct.ComponentSchema {
  collectionName: 'components_curso_livre_curso_livres';
  info: {
    displayName: 'CursoLivre';
  };
  attributes: {
    Fim: Schema.Attribute.Date;
    Inicio: Schema.Attribute.Date;
    Instituicao: Schema.Attribute.String;
    Local: Schema.Attribute.String;
    Nome: Schema.Attribute.String;
    Resumo: Schema.Attribute.Text;
  };
}

export interface ExperienciaExperiencia extends Struct.ComponentSchema {
  collectionName: 'components_experiencia_experiencias';
  info: {
    displayName: 'Experiencia';
    icon: 'clock';
  };
  attributes: {
    Atribuicoes: Schema.Attribute.Text;
    Cargo: Schema.Attribute.String;
    Empresa: Schema.Attribute.String;
    Fim: Schema.Attribute.Date;
    Inicio: Schema.Attribute.Date;
  };
}

export interface FormacaoFormacao extends Struct.ComponentSchema {
  collectionName: 'components_formacao_formacaos';
  info: {
    displayName: 'Formacao';
    icon: 'book';
  };
  attributes: {
    Cidade: Schema.Attribute.String;
    Curso: Schema.Attribute.String;
    Fim: Schema.Attribute.Date;
    Inicio: Schema.Attribute.Date;
    Instituicao: Schema.Attribute.String;
  };
}

export interface SkillsSoftSkill extends Struct.ComponentSchema {
  collectionName: 'components_skills_soft_skills';
  info: {
    displayName: 'SoftSkill';
  };
  attributes: {
    Nivel: Schema.Attribute.String;
    Skill: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'curso-livre.curso-livre': CursoLivreCursoLivre;
      'experiencia.experiencia': ExperienciaExperiencia;
      'formacao.formacao': FormacaoFormacao;
      'skills.soft-skill': SkillsSoftSkill;
    }
  }
}
