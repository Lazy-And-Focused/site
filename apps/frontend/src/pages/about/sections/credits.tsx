import { CreditsSection } from '../ui/credits-section';

import { PROJECT_REPOSITORY } from '@shared/lib/constants';

export const CopyrightSection = () => {
  return (
    <CreditsSection
      id={'copyright'}
      title={'Примечание'}
      description={'Помимо этого, надо понимать, что...'}
    >
      <ul
        role='list'
        className='mx-auto w-full max-w-2xl list-inside list-disc space-y-4 rounded-lg bg-base-content/5 p-6 text-sm font-medium text-base-content/85'
      >
        <li className='list-disc'>
          <span className='cursor-not-allowed transition-colors hover:text-primary'>
            Аватары пользователей, как и их описания, <strong>принадлежат их владельцам</strong>
          </span>
        </li>
        <li className='list-disc'>
          <span className='text-base-content/50'>Дополнение: </span>
          <span className='cursor-not-allowed transition-colors hover:text-primary'>
            принадлежат <strong>кроме тех случаев, когда</strong> авторское право соотносится с
            другим правообладателем
          </span>
        </li>
        <li className='list-disc'>
          <span className='cursor-not-allowed transition-colors hover:text-primary'>
            Любая информация об участника была предоставлена,{' '}
            <strong>
              основываясь на данных из Интернет-ресурсов, если пользователь не предоставил
            </strong>{' '}
            описание, аватар или ссылки
          </span>
        </li>
        <li className='list-disc'>
          <span className='text-base-content/50'>Дополнение: </span>
          <span className='cursor-not-allowed transition-colors hover:text-primary'>
            ссылки на социальные сети участников были предоставлены{' '}
            <strong>только по обоюдному согласию между сторонами</strong>
          </span>
        </li>
      </ul>
    </CreditsSection>
  );
};

/**
 * Секция с благодарностями за ресурсы (иконки, как пример)
 */
export const ResourcesSection = () => {
  return (
    <CreditsSection
      id={'credits'}
      title={'Послесловие'}
      description={'Мы использовали следующие ресурсы для создания сайта'}
    >
      <ul
        role='list'
        className='mx-auto w-full max-w-2xl list-inside list-disc space-y-4 rounded-lg bg-base-content/5 p-6 text-sm font-medium text-base-content/85'
      >
        <li className='list-disc'>
          <a
            href='https://icons.getbootstrap.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 transition-colors hover:text-primary hover:underline'
          >
            Boostrap Icons
          </a>
        </li>
        <li className='list-disc'>
          <a
            href='https://www.svgrepo.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors hover:text-primary hover:underline'
          >
            SVG Repo
          </a>
          <span className='text-base-content/50'> (иконки Gravatar и VK)</span>
        </li>
        <li className='list-disc'>
          <a
            href={PROJECT_REPOSITORY}
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors hover:text-primary hover:underline'
          >
            И если интересно, весь стек здесь
          </a>
          <span className='text-base-content/50'> &lt;- кликните на текст</span>
        </li>
      </ul>
    </CreditsSection>
  );
};
