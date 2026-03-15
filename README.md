# 📚 Atividade de Git - Trabalho 1 (T1)

Atividade (T1). Com objetivo de treinara usar o Git.

## 📝 O faz

Simulamos como é trabalhar num projeto real com outras pessoas mexendo no mesmo código. Basicamente, o passo a passo foi esse:

1. Criei o repositório com o nome `UD-MCA-SEX-012026`.
2. Iniciei o arquivo `bio-alunos.txt` na branch `main`.
3. Criei branches diferentes (simulando outros participantes) para praticar o `checkout` e fazer commits isolados.
4. Preenchi as informações exigidas (RA, curso, trabalho, objetivo, etc.) no arquivo de texto.
5. Fiz o *merge* de todas as branches de volta para a `main`, simulando a integração do código.
6. Forcei alterações na mesma linha em branches diferentes para praticar a resolução de conflitos no VS Code.

## 🔍 Como ver o nosso histórico

Professor, para ver toda a árvore de alterações, as branches que criamos e os merges que fizemos, é só rodar esse comando aqui no terminal:

```bash
git log --oneline --graph --all
